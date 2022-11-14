import axios, { AxiosInstance } from "axios";
import { HYRequestInterceptors, HYRequestConfig } from "./type";
// import { useUserStore } from "/@/store/modules/user";
import { ElLoading } from "element-plus";

const DEFAULT_LOADING = false;
class HYRequest {
  instance: AxiosInstance;
  interceptors?: HYRequestInterceptors;
  showLoading: boolean;
  loading: any;
  constructor(config: HYRequestConfig) {
    // 创建实例
    this.instance = axios.create(config);
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    // 保存基本信息
    this.interceptors = config.interceptors;
    // 使用拦截器
    // 从config中去除的拦截器是对应的实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("所有请求的拦截：请求成功的拦截");
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: false,
            text: "正在请求数据",
            background: "rgba(0, 0, 0, 0.5)",
          });
        }

        return config;
      },
      (err) => {
        // console.log("所有请求的拦截：请求失败的拦截");
        if (this.showLoading) {
          this.loading.close();
        }
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        // console.log("所有请求的拦截：响应成功的拦截");
        if (this.showLoading) {
          this.loading.close();
        }
        const data = res.data;
        if (data.code === -1001) {
          console.log("请求失败+错误信息");
        } else {
          return data;
        }
      },
      (err) => {
        // console.log("所有请求的拦截：响应失败的拦截");
        if (this.showLoading) {
          this.loading.close();
        }
        if (err.response.status === 404) {
          console.log("404错误");
        }
        return err;
      }
    );
  }
  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      if (config.showLoading) {
        this.showLoading = config.showLoading;
      } else {
        this.showLoading = DEFAULT_LOADING;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }

  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }

  patch<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "PATCH" });
  }

  delete<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }
}

export default HYRequest;
