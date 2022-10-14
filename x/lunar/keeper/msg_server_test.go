package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/zodiatic/zodiatic/testutil/keeper"
	"github.com/zodiatic/zodiatic/x/lunar/keeper"
	"github.com/zodiatic/zodiatic/x/lunar/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.LunarKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
