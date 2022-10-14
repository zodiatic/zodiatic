package lunar_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/zodiatic/zodiatic/testutil/keeper"
	"github.com/zodiatic/zodiatic/testutil/nullify"
	"github.com/zodiatic/zodiatic/x/lunar"
	"github.com/zodiatic/zodiatic/x/lunar/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		LunarList: []types.Lunar{
			{
				Yyyymmdd: 0,
			},
			{
				Yyyymmdd: 1,
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.LunarKeeper(t)
	lunar.InitGenesis(ctx, *k, genesisState)
	got := lunar.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.LunarList, got.LunarList)
	// this line is used by starport scaffolding # genesis/test/assert
}
