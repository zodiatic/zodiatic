package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/zodiatic/zodiatic/x/lunar/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) LunarAll(c context.Context, req *types.QueryAllLunarRequest) (*types.QueryAllLunarResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var lunars []types.Lunar
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	lunarStore := prefix.NewStore(store, types.KeyPrefix(types.LunarKeyPrefix))

	pageRes, err := query.Paginate(lunarStore, req.Pagination, func(key []byte, value []byte) error {
		var lunar types.Lunar
		if err := k.cdc.Unmarshal(value, &lunar); err != nil {
			return err
		}

		lunars = append(lunars, lunar)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllLunarResponse{Lunar: lunars, Pagination: pageRes}, nil
}

func (k Keeper) Lunar(c context.Context, req *types.QueryGetLunarRequest) (*types.QueryGetLunarResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetLunar(
		ctx,
		req.Yyyymmdd,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetLunarResponse{Lunar: val}, nil
}
