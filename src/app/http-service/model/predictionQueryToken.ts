/**
 * Custom Vision Training 1.2
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PredictionQueryTag } from './predictionQueryTag';


export interface PredictionQueryToken {
    session?: string;
    continuation?: string;
    maxCount?: number;
    orderBy?: PredictionQueryToken.OrderByEnum;
    tags?: Array<PredictionQueryTag>;
    iterationId?: string;
    startTime?: Date;
    endTime?: Date;
    application?: string;
}
export namespace PredictionQueryToken {
    export type OrderByEnum = 'Newest' | 'Oldest' | 'Suggested';
    export const OrderByEnum = {
        Newest: 'Newest' as OrderByEnum,
        Oldest: 'Oldest' as OrderByEnum,
        Suggested: 'Suggested' as OrderByEnum
    }
}
