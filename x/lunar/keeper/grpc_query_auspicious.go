package keeper

import (
        "context"
        "strings"
        "strconv"

        "github.com/cosmos/cosmos-sdk/store/prefix"
        sdk "github.com/cosmos/cosmos-sdk/types"
        "github.com/cosmos/cosmos-sdk/types/query"
        "google.golang.org/grpc/codes"
        "google.golang.org/grpc/status"
        "github.com/zodiatic/zodiatic/x/lunar/types"
)

func (k Keeper) Auspicious(goCtx context.Context, req *types.QueryAuspiciousRequest) (*types.QueryAuspiciousResponse, error) {
    if req == nil {
            return nil, status.Error(codes.InvalidArgument, "invalid request")
    }

    // Check date
    strDate := strconv.FormatUint(req.Date, 10)
    year := req.Date
    var month uint64

    if (len(strDate) == 6){
        year, _ = strconv.ParseUint(strDate[0:4], 10, 64)
        month, _ = strconv.ParseUint(strDate[4:6], 10, 64)
    }

    if (len(strDate) != 4 && len(strDate) != 6) || (month > 12) {
        return nil, status.Error(codes.InvalidArgument, "invalid date, format: YYYY or YYYYMM, where MM must be <=12")
    }

    var lunars []types.Lunar
    ctx := sdk.UnwrapSDKContext(goCtx)

    store := ctx.KVStore(k.storeKey)
    lunarStore := prefix.NewStore(store, types.KeyPrefix(types.LunarKeyPrefix))

    pageRes, err := query.FilteredPaginate(lunarStore, req.Pagination, func(key []byte, value []byte, accumulate bool) (bool, error) {
            var lunar types.Lunar
            if err := k.cdc.Unmarshal(value, &lunar); err != nil {
                    return false, err
            }

            if (lunar.Year == year) {
                if (lunar.Month == month) || (month == 0){
                    if strings.Contains(lunar.Auspicious, req.Auspicious){
                        lunars = append(lunars, lunar)
                        return true, nil
                    }
                }
            }

        return false, nil
    })

    if err != nil {
            return nil, status.Error(codes.Internal, err.Error())
    }


    return &types.QueryAuspiciousResponse{Lunar: lunars, Pagination: pageRes}, nil
}

