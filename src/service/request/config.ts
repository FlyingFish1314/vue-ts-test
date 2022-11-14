let BASE_URL!: string;
let TIME_OUT!: number;
if (process.env.NODE_ENV === "production") {
  BASE_URL = "生产环境";
  TIME_OUT = 10000;
} else if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api";
  TIME_OUT = 10000;
} else {
  BASE_URL = "其他环境";
  TIME_OUT = 10000;
}
export { BASE_URL, TIME_OUT };
