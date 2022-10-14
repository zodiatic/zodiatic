package types

import (
         "fmt"
        _ "embed"
        "encoding/json"
        "strings"
        "strconv"
)

//go:embed lunar.json
var lunarByte []byte

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

func ImportLunarToSlice () ([]Lunar) {
    var lunarsSlice []Lunar
    var lunars map[string]interface{}
    json.Unmarshal([]byte(lunarByte), &lunars)

    var zodiacMap = map[string]string{
        "鼠": "Rat",
        "牛": "Ox",
        "虎": "Tiger",
        "兔": "Rabbit",
        "龍": "Dragon",
        "蛇": "Snake",
        "馬": "Horse",
        "羊": "Goat",
        "猴": "Monkey",
        "雞": "Rooster",
        "狗": "Dog",
        "豬": "Pig",
    }

    var dayOfWeekMap = map[string]uint64{
        "星期日": 0,
        "星期一": 1,
        "星期二": 2,
        "星期三": 3,
        "星期四": 4,
        "星期五": 5,
        "星期六": 6,
    }

    for _, yearlyItems := range lunars {
        for _, monthlyItems := range yearlyItems.(map[string]interface{}){
            for _, lunarRaw := range monthlyItems.(map[string]interface{}){
                var lunarItem = lunarRaw.(map[string]interface{})
                var date = lunarItem["日期"].(string)
                var yyyymmdd, _ = strconv.ParseUint(strings.ReplaceAll(date, "-", ""), 10, 64)
                var dateSlice = strings.Split(date, "-")
                var year, _ = strconv.ParseUint(dateSlice[0], 10, 64)
                var month, _ = strconv.ParseUint(dateSlice[1], 10, 64)
                var day, _ = strconv.ParseUint(dateSlice[2], 10, 64)
                var lunarChinese = lunarItem["農曆"].(string)
                var eightCharacters = lunarItem["八字"].(string)
                var lunarSlice = lunarItem["農曆數字"].([]interface{})
                var lunarYear = uint64(lunarSlice[0].(float64))
                var lunarMonth = uint64(lunarSlice[1].(float64))
                var lunarDay = uint64(lunarSlice[2].(float64))
                var lunarLeapMonth = false
                if leap := lunarSlice[3].(string); leap != "" {
                    lunarLeapMonth = true
                }
                var sexagenaryYear = strings.Split(eightCharacters, " ")[0]
                var sexagenaryMonth = strings.Split(eightCharacters, " ")[1]
                var sexagenaryDay = strings.Split(eightCharacters, " ")[2]
                var tmpZodiac = strings.Split(lunarChinese, "[")[1]
                var zodiac = strings.Split(tmpZodiac, "]")[0]
                var zodiacEnglish = zodiacMap[zodiac]
                var dayOfWeek = dayOfWeekMap[lunarItem["星期"].(string)]
                var auspiciousDirectionsSlice = lunarItem["吉神方位"].([]interface{})
                var auspiciousDirections = strings.Join(interfaceSliceToStringSlice(auspiciousDirectionsSlice), " ")
                var auspiciousSlice = lunarItem["宜"].([]interface{})
                var auspicious = strings.Join(interfaceSliceToStringSlice(auspiciousSlice), " ")
                var inauspiciousSlice = lunarItem["忌"].([]interface{})
                var inauspicious = strings.Join(interfaceSliceToStringSlice(inauspiciousSlice), " ")
                var auspiciousTime = ""
                var inauspiciousTime = ""
                var version uint64 = 1
                var remarks = ""
                
                var lunar = Lunar{
                    Yyyymmdd:             yyyymmdd,
                    Date:                 date,
                    Year:                 year,
                    Month:                month,
                    Day:                  day,
                    Lunar:                lunarChinese,
                    EightCharacters:      eightCharacters,
                    LunarYear:            lunarYear,
                    LunarMonth:           lunarMonth,
                    LunarDay:             lunarDay,
                    LunarLeapMonth:       lunarLeapMonth,
                    SexagenaryYear:       sexagenaryYear,
                    SexagenaryMonth:      sexagenaryMonth,
                    SexagenaryDay:        sexagenaryDay,
                    Zodiac:               zodiac,
                    ZodiacEnglish:        zodiacEnglish,
                    DayOfWeek:            dayOfWeek,
                    AuspiciousDirections: auspiciousDirections,
                    Auspicious:           auspicious,
                    Inauspicious:         inauspicious,
                    AuspiciousTime:       auspiciousTime,
                    InauspiciousTime:     inauspiciousTime,
                    Version:              version,
                    Remarks:              remarks,
                }
                lunarsSlice = append(lunarsSlice, lunar)
            }
        }
    }
    return lunarsSlice
}

func interfaceSliceToStringSlice(interfaceSlice []interface{})(s []string){
    s = make([]string, len(interfaceSlice))
    for i, v := range interfaceSlice {
        s[i] = fmt.Sprint(v)
    }
    return
}

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
        return &GenesisState{
                LunarList: ImportLunarToSlice(),
                // this line is used by starport scaffolding # genesis/types/default
                Params: DefaultParams(),
        }
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
        // Check for duplicated index in lunar
        lunarIndexMap := make(map[string]struct{})

        for _, elem := range gs.LunarList {
                index := string(LunarKey(elem.Yyyymmdd))
                if _, ok := lunarIndexMap[index]; ok {
                        return fmt.Errorf("duplicated index for lunar")
                }
                lunarIndexMap[index] = struct{}{}
        }
        // this line is used by starport scaffolding # genesis/types/validate

        return gs.Params.Validate()
}

