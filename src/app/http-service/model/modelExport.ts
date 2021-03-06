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


export interface ModelExport {
    platform?: ModelExport.PlatformEnum;
    status?: ModelExport.StatusEnum;
    downloadUri?: string;
}
export namespace ModelExport {
    export type PlatformEnum = 'CoreML' | 'TensorFlow';
    export const PlatformEnum = {
        CoreML: 'CoreML' as PlatformEnum,
        TensorFlow: 'TensorFlow' as PlatformEnum
    }
    export type StatusEnum = 'Exporting' | 'Failed' | 'Done';
    export const StatusEnum = {
        Exporting: 'Exporting' as StatusEnum,
        Failed: 'Failed' as StatusEnum,
        Done: 'Done' as StatusEnum
    }
}
