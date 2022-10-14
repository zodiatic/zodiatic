package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"github.com/zodiatic/zodiatic/x/lunar/types"
)

var _ = strconv.Itoa(0)

func CmdAuspicious() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "auspicious [date] [auspicious]",
		Short: "Query auspicious",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqDate, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			reqAuspicious := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAuspiciousRequest{

				Date:       reqDate,
				Auspicious: reqAuspicious,
			}

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}
			params.Pagination = pageReq

			res, err := queryClient.Auspicious(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
