package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/zodiatic/zodiatic/testutil/keeper"
	"github.com/zodiatic/zodiatic/x/zodiatic/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.ZodiaticKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
