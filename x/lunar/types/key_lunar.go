package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// LunarKeyPrefix is the prefix to retrieve all Lunar
	LunarKeyPrefix = "Lunar/value/"
)

// LunarKey returns the store key to retrieve a Lunar from the index fields
func LunarKey(
	yyyymmdd uint64,
) []byte {
	var key []byte

	yyyymmddBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(yyyymmddBytes, yyyymmdd)
	key = append(key, yyyymmddBytes...)
	key = append(key, []byte("/")...)

	return key
}
