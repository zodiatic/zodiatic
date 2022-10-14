package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/zodiatic/zodiatic/testutil/keeper"
	"github.com/zodiatic/zodiatic/testutil/nullify"
	"github.com/zodiatic/zodiatic/x/lunar/keeper"
	"github.com/zodiatic/zodiatic/x/lunar/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNLunar(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Lunar {
	items := make([]types.Lunar, n)
	for i := range items {
		items[i].Yyyymmdd = uint64(i)

		keeper.SetLunar(ctx, items[i])
	}
	return items
}

func TestLunarGet(t *testing.T) {
	keeper, ctx := keepertest.LunarKeeper(t)
	items := createNLunar(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetLunar(ctx,
			item.Yyyymmdd,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestLunarRemove(t *testing.T) {
	keeper, ctx := keepertest.LunarKeeper(t)
	items := createNLunar(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveLunar(ctx,
			item.Yyyymmdd,
		)
		_, found := keeper.GetLunar(ctx,
			item.Yyyymmdd,
		)
		require.False(t, found)
	}
}

func TestLunarGetAll(t *testing.T) {
	keeper, ctx := keepertest.LunarKeeper(t)
	items := createNLunar(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllLunar(ctx)),
	)
}
