/** Copyright 2022 NEC Corporation
Released under the MIT license.
https://opensource.org/licenses/mit-license.php
*/
/* eslint-disable */
import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { Request, Response, NextFunction } from 'express';
/* eslint-enable */
import { transformAndValidate } from 'class-transformer-validator';
import AppError from '../../common/AppError';
import Config from '../../common/Config';
import { ResponseCode } from '../../common/ResponseCode';
import PutIndAppendixReqDto from '../dto/PutIndAppendixReqDto';
const message = Config.ReadConfig('./config/message.json');

@Middleware({ type: 'before' })
export default class PutIndAppendixRequestValidator implements ExpressMiddlewareInterface {
    async use (request: Request, response: Response, next: NextFunction): Promise<void> {
        // 空かどうか判定し、空と判定した場合にはエラーをスロー
        if (!request.body || JSON.stringify(request.body) === JSON.stringify({})) {
            throw new AppError(message.REQUEST_IS_EMPTY, ResponseCode.BAD_REQUEST);
        }

        // パラメータバリデーション
        const dto = await transformAndValidate(PutIndAppendixReqDto, request.body);
        if (Array.isArray(dto)) {
            throw new AppError(message.REQUEST_IS_ARRAY, 400);
        }
        next();
    }
}