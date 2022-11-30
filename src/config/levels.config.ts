interface LaborInsuranceSettings {
  readonly highestLevel: number
  readonly costRate: number      // 勞工負擔比率
  readonly accidentRate: number  // 普通事故費率
  readonly jobRate: number       // 就業保險費率
}

interface HealthInsuranceSettings {
  readonly highestLevel: number
  readonly costRate: number
  readonly insuranceRate: number
}

interface RetireFundSettings {
  readonly highestLevel: number
  readonly defaultRate: number
}

export const laborSettings: LaborInsuranceSettings = {
  highestLevel: 45800,
  costRate: 0.2,  // 勞工負擔比率
  accidentRate: 0.105, // 普通事故費率
  jobRate: 0.01  // 就業保險費率
}

export const healthSetting: HealthInsuranceSettings = {
  highestLevel: 219500,
  costRate: 0.3,
  insuranceRate: 0.0517
}

export const retireFundSettings: RetireFundSettings = {
  highestLevel: 150000,
  defaultRate: 0.06
}


export const laborlevels: number[] = [
  25250, 26400, 27600, 28800, 30300, 31800, 33300, 34800, 36300, 38200, 40100, 42000, 43900, 45800
]

export const retireFundLevels: number[] = [
  ...laborlevels,
  48200, 50600, 53000, 55400, 57800, 60800, 63800, 66800, 69800, 72800, 76500, 80200, 83900, 87600, 92100, 96600, 101100, 105600, 110100, 115500, 120900, 126300, 131700, 137100, 142500, 147900, 150000
]

export const healthLevels: number[] = [
  ...retireFundLevels,
  156400, 162800, 169200, 175600, 182000, 189500, 197000, 204500, 212000, 219500
]


