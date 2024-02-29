import React from "react";

const LogoSVG = ({size, fill}) => {
  const fillSize = size || 28;
  const fillColor = fill || '#FFF';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.2" width={fillSize} height={fillSize} baseProfile="tiny" viewBox="0.00 0.00 512.00 512.00">
      <path fill={fillColor} d="
      M 0.00 0.00
      L 512.00 0.00
      L 512.00 512.00
      L 0.00 512.00
      L 0.00 0.00
      Z
      M 287.81 48.62
      Q 304.10 52.95 318.58 60.05
      Q 325.28 63.33 330.06 66.08
      Q 344.00 74.09 356.66 86.52
      Q 389.78 119.04 399.21 165.15
      Q 400.18 169.88 400.59 174.86
      Q 400.60 174.96 400.50 174.99
      L 400.49 174.99
      Q 400.33 175.02 400.28 174.87
      Q 397.75 166.84 393.76 159.61
      Q 377.01 129.28 347.83 112.11
      Q 329.52 101.33 311.73 96.87
      Q 297.18 93.22 281.24 92.81
      Q 280.62 92.79 281.18 93.06
      Q 282.16 93.52 283.22 93.78
      Q 292.34 96.01 299.00 98.93
      Q 337.74 115.94 358.73 152.35
      Q 370.44 174.13 373.92 198.12
      C 375.20 206.95 375.14 216.45 374.97 225.87
      Q 374.68 242.65 368.90 260.86
      Q 361.49 284.23 346.05 303.36
      Q 344.23 305.61 342.34 307.95
      Q 341.92 307.42 342.32 306.81
      Q 350.06 294.99 355.00 282.54
      C 357.50 276.25 359.01 269.63 360.46 263.07
      Q 361.81 257.00 362.22 248.24
      Q 364.52 198.80 335.46 160.72
      Q 334.16 159.02 332.85 157.45
      Q 331.53 155.87 330.43 154.05
      Q 330.36 153.93 330.24 154.00
      L 330.23 154.01
      Q 330.08 154.09 330.17 154.24
      Q 331.44 156.45 333.04 158.60
      Q 334.76 160.91 336.20 163.50
      Q 342.57 175.05 346.16 186.23
      Q 348.57 193.70 350.20 204.88
      Q 351.46 213.56 350.76 222.08
      Q 347.49 261.52 318.80 288.81
      Q 295.12 311.35 263.68 317.38
      C 251.16 319.78 239.37 319.52 226.76 316.81
      Q 199.35 310.91 179.95 290.40
      Q 174.95 282.53 173.99 273.01
      Q 173.36 266.68 175.70 260.97
      C 176.64 258.67 178.65 256.44 180.02 253.96
      Q 184.65 253.04 186.01 252.99
      Q 207.44 252.24 226.79 260.22
      C 233.84 263.13 240.54 266.76 248.01 268.84
      Q 253.96 270.49 258.76 271.28
      Q 275.96 274.10 292.81 267.64
      C 300.66 264.63 307.49 259.40 309.10 250.60
      Q 309.51 248.37 307.46 247.52
      C 294.04 241.95 280.70 233.96 271.07 223.52
      C 261.78 213.45 256.06 201.48 251.85 187.93
      Q 249.30 179.74 246.08 171.90
      Q 237.62 151.35 219.42 132.81
      Q 217.69 131.04 217.53 130.23
      Q 210.69 94.07 193.83 60.17
      Q 193.48 59.47 193.03 60.12
      L 190.61 63.61
      Q 175.20 83.82 166.34 107.12
      Q 166.11 107.73 165.31 109.02
      Q 156.37 108.30 146.26 109.93
      Q 138.84 106.25 133.48 102.02
      Q 118.85 90.45 106.80 74.10
      Q 102.40 68.13 97.74 61.26
      A 0.63 0.63 0.0 0 0 96.82 61.12
      Q 96.47 61.41 96.32 61.82
      Q 83.67 96.72 86.69 132.38
      C 87.58 142.96 89.91 153.69 92.41 164.28
      Q 92.76 165.74 91.71 166.74
      Q 75.20 182.56 66.04 202.88
      Q 62.09 211.65 58.11 220.41
      C 50.62 236.94 37.70 251.81 20.77 259.12
      Q 18.48 260.11 20.97 259.86
      Q 56.22 256.32 82.21 234.70
      Q 82.82 234.19 83.90 233.95
      Q 84.50 233.82 84.16 234.33
      L 83.78 234.88
      Q 82.18 235.76 81.08 237.33
      Q 69.39 254.04 64.04 273.80
      Q 59.11 292.02 59.73 312.91
      C 61.05 357.63 85.16 398.09 119.35 426.55
      Q 165.07 464.62 224.73 473.77
      C 231.52 474.81 238.81 475.06 245.83 475.74
      C 251.77 476.32 258.25 476.15 264.27 475.77
      C 278.91 474.84 292.42 473.58 307.00 470.00
      Q 352.33 458.85 389.76 430.01
      Q 397.13 424.32 403.87 418.33
      Q 405.14 417.21 403.48 417.53
      C 397.50 418.67 391.51 419.06 385.32 418.70
      Q 381.51 418.47 378.24 418.34
      Q 373.10 417.49 368.40 416.77
      C 357.45 415.09 347.06 411.64 337.09 406.91
      Q 335.48 406.15 337.23 406.48
      C 341.69 407.34 346.00 408.64 350.55 408.92
      C 362.98 409.66 375.47 409.62 387.81 407.14
      Q 395.99 405.48 401.73 403.76
      Q 431.62 394.78 454.30 374.12
      Q 485.60 345.62 497.86 304.36
      Q 500.70 294.81 502.73 283.49
      Q 504.04 276.24 504.24 267.83
      Q 505.12 265.02 504.67 262.11
      Q 504.64 261.94 504.46 261.95
      L 504.46 261.95
      Q 504.28 261.96 504.28 262.14
      Q 504.23 264.81 503.73 267.45
      Q 498.38 292.24 486.44 312.70
      Q 471.45 338.37 446.18 356.38
      Q 443.72 358.14 440.97 360.08
      Q 443.63 355.51 445.61 351.15
      Q 456.72 326.66 462.03 301.71
      Q 471.66 256.54 463.02 211.98
      Q 454.11 166.03 429.13 129.88
      C 403.13 92.25 366.16 64.74 322.34 51.93
      C 312.32 49.00 303.15 47.62 293.12 46.25
      C 283.03 44.86 273.37 44.75 263.41 45.22
      Q 263.20 45.23 263.19 45.44
      L 263.19 45.45
      Q 263.18 45.70 263.43 45.72
      Q 275.63 47.01 287.81 48.62
      Z"
      />
      <path fill="#ff6933" d="
      M 440.97 360.08
      Q 424.49 370.44 405.74 377.00
      Q 401.40 378.52 388.02 381.51
      Q 389.28 379.27 391.06 377.39
      Q 393.27 375.06 394.24 373.48
      Q 397.53 368.06 401.03 362.65
      Q 403.07 359.50 404.44 356.42
      Q 406.02 352.88 407.74 350.06
      C 409.49 347.20 410.52 344.15 412.10 341.22
      Q 413.79 338.09 415.18 334.35
      Q 416.31 331.31 417.56 328.32
      Q 418.91 325.09 419.83 322.19
      Q 421.07 318.32 422.53 314.26
      Q 424.07 309.96 425.07 306.09
      Q 427.73 295.86 429.76 286.15
      Q 430.74 281.45 431.53 275.94
      Q 431.85 273.74 431.95 271.68
      C 432.13 268.05 433.06 264.74 433.01 261.08
      C 432.92 253.99 433.64 247.07 433.46 239.98
      Q 433.26 231.84 433.04 223.70
      Q 432.98 221.47 432.60 218.82
      Q 432.26 216.42 432.01 213.96
      Q 431.44 210.00 431.09 206.00
      C 430.91 203.91 430.18 202.02 430.05 199.97
      C 429.86 197.21 428.73 194.71 428.18 192.00
      Q 425.02 176.56 418.91 161.17
      Q 408.87 135.85 392.78 114.05
      Q 375.16 90.16 349.98 72.67
      C 338.91 64.98 327.01 59.14 314.49 54.49
      Q 301.46 49.64 287.81 48.62
      Q 275.63 47.01 263.43 45.72
      Q 263.18 45.70 263.19 45.45
      L 263.19 45.44
      Q 263.20 45.23 263.41 45.22
      C 273.37 44.75 283.03 44.86 293.12 46.25
      C 303.15 47.62 312.32 49.00 322.34 51.93
      C 366.16 64.74 403.13 92.25 429.13 129.88
      Q 454.11 166.03 463.02 211.98
      Q 471.66 256.54 462.03 301.71
      Q 456.72 326.66 445.61 351.15
      Q 443.63 355.51 440.97 360.08
      Z"
      />
      <path fill="#ff924f" d="
      M 432.01 213.96
      Q 431.81 214.75 431.76 215.57
      Q 431.75 215.83 431.53 215.71
      Q 431.28 215.57 431.42 215.35
      A 0.03 0.03 0.0 0 0 431.40 215.30
      L 425.60 215.07
      Q 425.34 215.06 425.14 214.88
      Q 424.99 214.74 424.93 214.53
      A 0.58 0.57 81.9 0 0 424.38 214.11
      L 419.91 214.11
      Q 419.40 214.11 419.10 214.52
      Q 418.39 215.46 417.06 215.08
      Q 416.47 214.92 416.14 215.43
      Q 415.46 216.49 414.07 216.08
      A 0.82 0.82 0.0 0 0 413.14 216.43
      Q 412.45 217.52 411.07 217.06
      A 0.78 0.78 0.0 0 0 410.10 217.52
      Q 409.81 218.26 409.02 218.08
      Q 408.46 217.96 408.15 218.44
      Q 407.45 219.49 406.04 219.08
      Q 405.45 218.90 405.14 219.44
      Q 405.05 219.60 404.93 219.75
      Q 404.62 220.11 404.15 220.11
      L 390.98 220.11
      A 0.89 0.89 0.0 0 0 390.35 220.37
      L 390.10 220.63
      Q 389.74 221.00 389.23 221.06
      L 386.06 221.43
      Q 385.53 221.49 385.21 221.92
      L 383.75 223.94
      Q 383.70 216.34 382.26 208.74
      Q 379.32 193.25 373.56 178.61
      C 371.98 174.59 369.44 169.93 367.59 165.44
      Q 365.39 160.08 358.73 152.35
      Q 337.74 115.94 299.00 98.93
      Q 292.34 96.01 283.22 93.78
      Q 282.16 93.52 281.18 93.06
      Q 280.62 92.79 281.24 92.81
      Q 297.18 93.22 311.73 96.87
      Q 329.52 101.33 347.83 112.11
      Q 377.01 129.28 393.76 159.61
      Q 397.75 166.84 400.28 174.87
      Q 400.33 175.02 400.49 174.99
      L 400.50 174.99
      Q 400.60 174.96 400.59 174.86
      Q 400.18 169.88 399.21 165.15
      Q 389.78 119.04 356.66 86.52
      Q 344.00 74.09 330.06 66.08
      Q 325.28 63.33 318.58 60.05
      Q 304.10 52.95 287.81 48.62
      Q 301.46 49.64 314.49 54.49
      C 327.01 59.14 338.91 64.98 349.98 72.67
      Q 375.16 90.16 392.78 114.05
      Q 408.87 135.85 418.91 161.17
      Q 425.02 176.56 428.18 192.00
      C 428.73 194.71 429.86 197.21 430.05 199.97
      C 430.18 202.02 430.91 203.91 431.09 206.00
      Q 431.44 210.00 432.01 213.96
      Z"
      />
      <path fill="#ffffff" d="
      M 180.02 253.96
      Q 171.73 254.49 162.07 258.34
      Q 152.53 262.15 145.79 269.68
      Q 144.97 270.59 145.14 269.38
      Q 145.91 263.66 147.49 258.30
      C 148.98 253.21 151.90 248.82 155.37 244.95
      A 0.41 0.40 37.1 0 0 155.28 244.33
      Q 145.81 238.56 137.41 236.85
      Q 133.10 235.97 127.16 235.84
      C 120.47 235.69 114.65 235.88 108.36 238.15
      Q 106.97 238.65 107.97 237.56
      Q 120.75 223.57 138.15 220.05
      Q 139.99 219.67 138.40 218.66
      C 125.98 210.75 116.24 200.04 108.64 187.82
      Q 97.58 170.04 94.95 148.74
      Q 94.78 147.38 95.09 146.01
      Q 95.29 145.16 95.66 145.95
      C 105.81 167.50 122.72 182.42 145.83 188.79
      C 158.33 192.23 172.05 190.88 184.87 190.69
      Q 192.64 190.57 197.62 191.61
      Q 216.55 195.56 228.43 210.88
      Q 231.66 215.04 238.53 225.24
      Q 246.67 237.31 260.41 246.34
      Q 269.41 252.26 279.47 255.28
      Q 282.43 262.18 289.54 262.25
      C 295.58 262.31 301.28 258.54 303.94 253.38
      A 1.83 1.83 0.0 0 0 303.17 250.92
      L 289.53 243.71
      Q 289.34 243.45 288.72 243.10
      Q 269.88 232.40 258.24 213.99
      C 252.87 205.50 248.96 194.97 245.83 185.14
      Q 243.74 178.59 241.04 172.48
      Q 230.94 149.65 213.11 133.47
      C 204.66 124.98 193.37 118.42 182.55 113.87
      Q 190.60 116.10 193.94 117.59
      Q 203.23 121.74 211.05 127.34
      Q 212.29 128.23 211.99 126.73
      C 207.64 104.87 200.07 83.86 190.61 63.61
      L 193.03 60.12
      Q 193.48 59.47 193.83 60.17
      Q 210.69 94.07 217.53 130.23
      Q 217.69 131.04 219.42 132.81
      Q 237.62 151.35 246.08 171.90
      Q 249.30 179.74 251.85 187.93
      C 256.06 201.48 261.78 213.45 271.07 223.52
      C 280.70 233.96 294.04 241.95 307.46 247.52
      Q 309.51 248.37 309.10 250.60
      C 307.49 259.40 300.66 264.63 292.81 267.64
      Q 275.96 274.10 258.76 271.28
      Q 253.96 270.49 248.01 268.84
      C 240.54 266.76 233.84 263.13 226.79 260.22
      Q 207.44 252.24 186.01 252.99
      Q 184.65 253.04 180.02 253.96
      Z
      M 196.58 225.37
      C 203.17 232.85 214.36 237.04 224.20 234.91
      Q 229.72 233.71 235.51 234.07
      Q 236.40 234.13 235.79 233.47
      Q 235.32 232.96 234.65 232.64
      Q 234.14 232.39 233.84 231.91
      Q 230.14 226.06 226.51 221.53
      Q 216.54 209.06 200.54 208.77
      Q 194.78 208.66 188.82 208.69
      C 186.02 208.70 183.33 208.20 180.57 207.85
      Q 178.80 207.62 180.25 208.66
      C 186.70 213.29 191.43 219.52 196.58 225.37
      Z"
      />
      <path fill="#2b92fd" d="
      M 146.26 109.93
      Q 153.85 114.42 164.26 116.74
      Q 175.14 119.16 185.96 121.89
      Q 196.92 124.64 203.45 128.57
      Q 209.25 132.05 213.11 133.47
      Q 230.94 149.65 241.04 172.48
      Q 243.74 178.59 245.83 185.14
      C 248.96 194.97 252.87 205.50 258.24 213.99
      Q 269.88 232.40 288.72 243.10
      Q 289.34 243.45 289.53 243.71
      Q 289.46 243.83 289.34 243.86
      Q 289.17 243.92 289.25 244.05
      Q 289.27 244.09 289.29 244.14
      Q 289.35 244.29 289.21 244.40
      Q 286.88 246.21 285.58 246.87
      Q 280.39 249.47 279.47 255.28
      Q 269.41 252.26 260.41 246.34
      Q 246.67 237.31 238.53 225.24
      Q 231.66 215.04 228.43 210.88
      Q 216.55 195.56 197.62 191.61
      Q 192.64 190.57 184.87 190.69
      C 172.05 190.88 158.33 192.23 145.83 188.79
      C 122.72 182.42 105.81 167.50 95.66 145.95
      Q 95.29 145.16 95.09 146.01
      Q 94.78 147.38 94.95 148.74
      Q 97.58 170.04 108.64 187.82
      C 116.24 200.04 125.98 210.75 138.40 218.66
      Q 139.99 219.67 138.15 220.05
      Q 120.75 223.57 107.97 237.56
      Q 106.97 238.65 108.36 238.15
      C 114.65 235.88 120.47 235.69 127.16 235.84
      Q 133.10 235.97 137.41 236.85
      Q 145.81 238.56 155.28 244.33
      A 0.41 0.40 37.1 0 1 155.37 244.95
      C 151.90 248.82 148.98 253.21 147.49 258.30
      Q 145.91 263.66 145.14 269.38
      Q 144.97 270.59 145.79 269.68
      Q 152.53 262.15 162.07 258.34
      Q 171.73 254.49 180.02 253.96
      C 178.65 256.44 176.64 258.67 175.70 260.97
      Q 173.36 266.68 173.99 273.01
      Q 174.95 282.53 179.95 290.40
      Q 184.48 301.82 192.32 311.43
      Q 216.58 341.18 250.42 357.54
      Q 253.91 359.76 255.70 360.56
      Q 266.68 365.49 277.85 369.97
      Q 282.25 371.74 287.29 373.29
      Q 292.10 374.77 296.87 376.24
      Q 304.36 378.65 310.76 379.76
      C 314.41 380.39 317.80 381.66 321.13 382.07
      Q 327.88 382.91 334.00 383.73
      C 337.38 384.18 340.99 383.96 344.48 384.33
      Q 352.03 385.15 360.95 384.62
      Q 371.04 384.03 381.47 382.62
      Q 385.09 382.14 388.02 381.51
      Q 401.40 378.52 405.74 377.00
      Q 424.49 370.44 440.97 360.08
      Q 443.72 358.14 446.18 356.38
      Q 471.45 338.37 486.44 312.70
      Q 498.38 292.24 503.73 267.45
      Q 504.24 267.10 504.24 267.83
      Q 504.04 276.24 502.73 283.49
      Q 500.70 294.81 497.86 304.36
      Q 485.60 345.62 454.30 374.12
      Q 431.62 394.78 401.73 403.76
      Q 395.99 405.48 387.81 407.14
      C 375.47 409.62 362.98 409.66 350.55 408.92
      C 346.00 408.64 341.69 407.34 337.23 406.48
      Q 335.48 406.15 337.09 406.91
      C 347.06 411.64 357.45 415.09 368.40 416.77
      Q 373.10 417.49 378.24 418.34
      Q 362.85 428.80 346.27 435.30
      Q 327.88 442.51 308.73 446.21
      C 303.18 447.29 297.25 447.83 291.56 448.43
      C 281.65 449.47 271.22 449.03 261.30 448.98
      C 257.24 448.96 253.39 448.18 249.05 447.85
      Q 243.27 447.43 236.94 446.24
      C 193.87 438.16 155.30 416.67 125.35 385.05
      C 108.82 367.59 95.64 346.63 87.45 324.76
      C 78.41 300.64 75.93 275.65 80.08 250.42
      C 80.85 245.77 83.19 240.38 83.78 234.88
      L 84.16 234.33
      Q 84.50 233.82 83.90 233.95
      Q 82.82 234.19 82.21 234.70
      Q 56.22 256.32 20.97 259.86
      Q 18.48 260.11 20.77 259.12
      C 37.70 251.81 50.62 236.94 58.11 220.41
      Q 62.09 211.65 66.04 202.88
      Q 75.20 182.56 91.71 166.74
      Q 92.76 165.74 92.41 164.28
      C 89.91 153.69 87.58 142.96 86.69 132.38
      Q 83.67 96.72 96.32 61.82
      Q 96.47 61.41 96.82 61.12
      A 0.63 0.63 0.0 0 1 97.74 61.26
      Q 102.40 68.13 106.80 74.10
      Q 118.85 90.45 133.48 102.02
      Q 138.84 106.25 146.26 109.93
      Z"
      />
      <path fill="#2b92fd" d="
      M 190.61 63.61
      C 200.07 83.86 207.64 104.87 211.99 126.73
      Q 212.29 128.23 211.05 127.34
      Q 203.23 121.74 193.94 117.59
      Q 190.60 116.10 182.55 113.87
      L 165.31 109.02
      Q 166.11 107.73 166.34 107.12
      Q 175.20 83.82 190.61 63.61
      Z"
      />
      <path fill="#215ab7" d="
      M 165.31 109.02
      L 182.55 113.87
      C 193.37 118.42 204.66 124.98 213.11 133.47
      Q 209.25 132.05 203.45 128.57
      Q 196.92 124.64 185.96 121.89
      Q 175.14 119.16 164.26 116.74
      Q 153.85 114.42 146.26 109.93
      Q 156.37 108.30 165.31 109.02
      Z"
      />
      <path fill="#ff6933" d="
      M 358.73 152.35
      Q 365.39 160.08 367.59 165.44
      C 369.44 169.93 371.98 174.59 373.56 178.61
      Q 379.32 193.25 382.26 208.74
      Q 383.70 216.34 383.75 223.94
      Q 384.66 244.62 381.57 260.25
      Q 373.72 299.91 346.05 333.47
      Q 334.14 347.91 316.61 361.46
      Q 310.87 365.90 304.67 369.38
      Q 302.73 370.46 301.23 371.62
      Q 299.40 373.03 297.69 373.70
      A 0.84 0.84 0.0 0 0 297.44 375.12
      Q 297.48 375.16 296.87 376.24
      Q 292.10 374.77 287.29 373.29
      Q 282.25 371.74 277.85 369.97
      Q 266.68 365.49 255.70 360.56
      Q 253.91 359.76 250.42 357.54
      Q 288.02 351.24 317.60 330.35
      Q 330.44 321.28 342.34 307.95
      Q 344.23 305.61 346.05 303.36
      Q 361.49 284.23 368.90 260.86
      Q 374.68 242.65 374.97 225.87
      C 375.14 216.45 375.20 206.95 373.92 198.12
      Q 370.44 174.13 358.73 152.35
      Z"
      />
      <path fill="#215ab7" d="
      M 342.34 307.95
      Q 330.44 321.28 317.60 330.35
      Q 288.02 351.24 250.42 357.54
      Q 216.58 341.18 192.32 311.43
      Q 184.48 301.82 179.95 290.40
      Q 199.35 310.91 226.76 316.81
      C 239.37 319.52 251.16 319.78 263.68 317.38
      Q 295.12 311.35 318.80 288.81
      Q 347.49 261.52 350.76 222.08
      Q 351.46 213.56 350.20 204.88
      Q 348.57 193.70 346.16 186.23
      Q 342.57 175.05 336.20 163.50
      Q 334.76 160.91 333.04 158.60
      Q 331.44 156.45 330.17 154.24
      Q 330.08 154.09 330.23 154.01
      L 330.24 154.00
      Q 330.36 153.93 330.43 154.05
      Q 331.53 155.87 332.85 157.45
      Q 334.16 159.02 335.46 160.72
      Q 364.52 198.80 362.22 248.24
      Q 361.81 257.00 360.46 263.07
      C 359.01 269.63 357.50 276.25 355.00 282.54
      Q 350.06 294.99 342.32 306.81
      Q 341.92 307.42 342.34 307.95
      Z"
      />
      <path fill="#2b92fd" d="
      M 224.20 234.91
      C 214.36 237.04 203.17 232.85 196.58 225.37
      C 191.43 219.52 186.70 213.29 180.25 208.66
      Q 178.80 207.62 180.57 207.85
      C 183.33 208.20 186.02 208.70 188.82 208.69
      Q 194.78 208.66 200.54 208.77
      Q 216.54 209.06 226.51 221.53
      Q 230.14 226.06 233.84 231.91
      Q 234.14 232.39 234.65 232.64
      Q 235.32 232.96 235.79 233.47
      Q 236.40 234.13 235.51 234.07
      Q 229.72 233.71 224.20 234.91
      Z"
      />
      <path fill="#ff7a3e" d="
      M 432.01 213.96
      Q 432.26 216.42 432.60 218.82
      Q 432.98 221.47 433.04 223.70
      Q 433.26 231.84 433.46 239.98
      C 433.64 247.07 432.92 253.99 433.01 261.08
      C 433.06 264.74 432.13 268.05 431.95 271.68
      Q 431.85 273.74 431.53 275.94
      Q 430.74 281.45 429.76 286.15
      Q 427.73 295.86 425.07 306.09
      Q 424.07 309.96 422.53 314.26
      Q 421.07 318.32 419.83 322.19
      Q 418.91 325.09 417.56 328.32
      Q 416.31 331.31 415.18 334.35
      Q 413.79 338.09 412.10 341.22
      C 410.52 344.15 409.49 347.20 407.74 350.06
      Q 406.02 352.88 404.44 356.42
      Q 403.07 359.50 401.03 362.65
      Q 397.53 368.06 394.24 373.48
      Q 393.27 375.06 391.06 377.39
      Q 389.28 379.27 388.02 381.51
      Q 385.09 382.14 381.47 382.62
      Q 371.04 384.03 360.95 384.62
      Q 352.03 385.15 344.48 384.33
      C 340.99 383.96 337.38 384.18 334.00 383.73
      Q 327.88 382.91 321.13 382.07
      C 317.80 381.66 314.41 380.39 310.76 379.76
      Q 304.36 378.65 296.87 376.24
      Q 297.48 375.16 297.44 375.12
      A 0.84 0.84 0.0 0 1 297.69 373.70
      Q 299.40 373.03 301.23 371.62
      Q 302.73 370.46 304.67 369.38
      Q 310.87 365.90 316.61 361.46
      Q 334.14 347.91 346.05 333.47
      Q 373.72 299.91 381.57 260.25
      Q 384.66 244.62 383.75 223.94
      L 385.21 221.92
      Q 385.53 221.49 386.06 221.43
      L 389.23 221.06
      Q 389.74 221.00 390.10 220.63
      L 390.35 220.37
      A 0.89 0.89 0.0 0 1 390.98 220.11
      L 404.15 220.11
      Q 404.62 220.11 404.93 219.75
      Q 405.05 219.60 405.14 219.44
      Q 405.45 218.90 406.04 219.08
      Q 407.45 219.49 408.15 218.44
      Q 408.46 217.96 409.02 218.08
      Q 409.81 218.26 410.10 217.52
      A 0.78 0.78 0.0 0 1 411.07 217.06
      Q 412.45 217.52 413.14 216.43
      A 0.82 0.82 0.0 0 1 414.07 216.08
      Q 415.46 216.49 416.14 215.43
      Q 416.47 214.92 417.06 215.08
      Q 418.39 215.46 419.10 214.52
      Q 419.40 214.11 419.91 214.11
      L 424.38 214.11
      A 0.58 0.57 81.9 0 1 424.93 214.53
      Q 424.99 214.74 425.14 214.88
      Q 425.34 215.06 425.60 215.07
      L 431.40 215.30
      A 0.03 0.03 0.0 0 1 431.42 215.35
      Q 431.28 215.57 431.53 215.71
      Q 431.75 215.83 431.76 215.57
      Q 431.81 214.75 432.01 213.96
      Z"
      />
      <path fill="#246cd3" d="
      M 83.78 234.88
      C 83.19 240.38 80.85 245.77 80.08 250.42
      C 75.93 275.65 78.41 300.64 87.45 324.76
      C 95.64 346.63 108.82 367.59 125.35 385.05
      C 155.30 416.67 193.87 438.16 236.94 446.24
      Q 243.27 447.43 249.05 447.85
      C 253.39 448.18 257.24 448.96 261.30 448.98
      C 271.22 449.03 281.65 449.47 291.56 448.43
      C 297.25 447.83 303.18 447.29 308.73 446.21
      Q 327.88 442.51 346.27 435.30
      Q 362.85 428.80 378.24 418.34
      Q 381.51 418.47 385.32 418.70
      C 391.51 419.06 397.50 418.67 403.48 417.53
      Q 405.14 417.21 403.87 418.33
      Q 397.13 424.32 389.76 430.01
      Q 352.33 458.85 307.00 470.00
      C 292.42 473.58 278.91 474.84 264.27 475.77
      C 258.25 476.15 251.77 476.32 245.83 475.74
      C 238.81 475.06 231.52 474.81 224.73 473.77
      Q 165.07 464.62 119.35 426.55
      C 85.16 398.09 61.05 357.63 59.73 312.91
      Q 59.11 292.02 64.04 273.80
      Q 69.39 254.04 81.08 237.33
      Q 82.18 235.76 83.78 234.88
      Z"
      />
      <path fill="#121522" d="
      M 289.53 243.71
      L 303.17 250.92
      A 1.83 1.83 0.0 0 1 303.94 253.38
      C 301.28 258.54 295.58 262.31 289.54 262.25
      Q 282.43 262.18 279.47 255.28
      Q 280.39 249.47 285.58 246.87
      Q 286.88 246.21 289.21 244.40
      Q 289.35 244.29 289.29 244.14
      Q 289.27 244.09 289.25 244.05
      Q 289.17 243.92 289.34 243.86
      Q 289.46 243.83 289.53 243.71
      Z"
      />
      <path fill="#246cd3" d="
      M 504.24 267.83
      Q 504.24 267.10 503.73 267.45
      Q 504.23 264.81 504.28 262.14
      Q 504.28 261.96 504.46 261.95
      L 504.46 261.95
      Q 504.64 261.94 504.67 262.11
      Q 505.12 265.02 504.24 267.83
      Z"
      />
    </svg>
  )
}


export default LogoSVG;