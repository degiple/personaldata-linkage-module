/** Copyright 2022 NEC Corporation
Released under the MIT license.
https://opensource.org/licenses/mit-license.php
*/
/**
 *
 *
 *
 * $Date$
 * $Revision$
 * $Author$
 *
 * TEMPLATE VERSION :  76463
 */

// SDE-IMPL-REQUIRED 本ファイルをコピーしコントローラーに定義した各 REST API のリクエスト・レスポンスごとにDTOを作成します。

export default class PostUserSettingsReqDto {
    /** */
    //    @IsString()
    identifyCode: string = '';
    /** */
    //    @IsString()
    userId: string = '';

    public getIdentifyCode (): string {
        return this.identifyCode;
    }

    public setIdentifyCode (identifyCode: string): void {
        this.identifyCode = identifyCode;
    }

    public getUserId (): string {
        return this.userId;
    }

    public setUserId (userId: string): void {
        this.userId = userId;
    }
}
