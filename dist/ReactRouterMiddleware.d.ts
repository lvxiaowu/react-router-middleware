import React from "react";
import { RouteObject } from "react-router-dom";
/**
 * @description 中间件的回调函数callback
 *
 */
export interface MiddlewareFunction {
    (route: any): boolean;
}
export interface RoutesMiddlewareObject extends RouteObject {
    /**
     * @description 权限处理的middleware callback[]
     *
     */
    middleware?: MiddlewareFunction[];
    /**
     * @description 子路由
     *
     */
    children?: RoutesMiddlewareObject[];
}
interface IProps {
    routes: RoutesMiddlewareObject[];
    locationArg?: Partial<Location> | string;
}
/**
 * @method useMiddlewareRoutes
 * @description 渲染middleware routes的hook
 */
export declare function useMiddlewareRoutes(routes: RoutesMiddlewareObject[], locationArg?: Partial<Location> | string): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export default function renderRoutes(props: IProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
