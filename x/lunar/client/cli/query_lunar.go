package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"github.com/zodiatic/zodiatic/x/lunar/types"
)

func CmdListLunar() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-lunar",
		Short: "list all lunar",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllLunarRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.LunarAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowLunar() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-lunar [yyyymmdd]",
		Short: "shows a lunar",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argYyyymmdd, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			params := &types.QueryGetLunarRequest{
				Yyyymmdd: argYyyymmdd,
			}

			res, err := queryClient.Lunar(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
