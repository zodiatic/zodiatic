package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/zodiatic/zodiatic/x/lunar/types"
)

// SetLunar set a specific lunar in the store from its index
func (k Keeper) SetLunar(ctx sdk.Context, lunar types.Lunar) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LunarKeyPrefix))
	b := k.cdc.MustMarshal(&lunar)
	store.Set(types.LunarKey(
		lunar.Yyyymmdd,
	), b)
}

// GetLunar returns a lunar from its index
func (k Keeper) GetLunar(
	ctx sdk.Context,
	yyyymmdd uint64,

) (val types.Lunar, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LunarKeyPrefix))

	b := store.Get(types.LunarKey(
		yyyymmdd,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveLunar removes a lunar from the store
func (k Keeper) RemoveLunar(
	ctx sdk.Context,
	yyyymmdd uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LunarKeyPrefix))
	store.Delete(types.LunarKey(
		yyyymmdd,
	))
}

// GetAllLunar returns all lunar
func (k Keeper) GetAllLunar(ctx sdk.Context) (list []types.Lunar) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LunarKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Lunar
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
