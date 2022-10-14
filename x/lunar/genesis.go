package lunar

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/zodiatic/zodiatic/x/lunar/keeper"
	"github.com/zodiatic/zodiatic/x/lunar/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the lunar
	for _, elem := range genState.LunarList {
		k.SetLunar(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.LunarList = k.GetAllLunar(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
