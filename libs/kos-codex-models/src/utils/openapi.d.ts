export interface paths {
    "/api/ext/freestyle/fcm/diagnostics/{pump}/pressureTest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform pressure test on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["86fe43fb-8924-470e-ad54-477ad16faf41"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/diagnostics/{pump}/opennessTest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform valve openness test on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["b4159f44-469d-41aa-b3dd-044dd8aebce5"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/diagnostics/{pump}/flowTest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform flow test on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["86fe43fb-8924-470e-ad54-477ad16faf41"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/diagnostics/{pump}/electricalTest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform electrical test on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["4641b329-0f71-4c58-bc76-62ab03196449"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/cartridges": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of installed cartridges. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["be6fcf70-acfd-4b8a-b36a-c09788327575"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/cartridges/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the cartridge with the specified id. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the cartridge to return. */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["7c99bc60-213c-4a89-891e-6f1c01c15a75"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/time/date": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the date. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["99169888-f02c-4745-98db-2111e43d6615"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/time/timezone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the timezone. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
                    };
                };
            };
        };
        put?: never;
        /** Set the timezone. (v1.0) */
        post: {
            parameters: {
                query?: {
                    /** @description The new linux timezone. */
                    tz?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/time/time": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the time. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["c1cf08cd-d8f8-4080-87e8-79fdb53c58e4"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/criticalData/sources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of sources viewed using HandleView. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["4a4ac33c-0a5f-44f6-9e91-14c3f6d19daf"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/criticalData/data": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all critical data. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["d4abd788-6e05-4647-9a88-e99f20a9baa4"];
                    };
                };
            };
        };
        put?: never;
        /** Set all critical data at once. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["d4abd788-6e05-4647-9a88-e99f20a9baa4"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/criticalData/data/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the named critical data. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the critical data to return. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["d4abd788-6e05-4647-9a88-e99f20a9baa4"];
                    };
                };
            };
        };
        put?: never;
        /** Set the named critical data. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the critical data to set. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["d4abd788-6e05-4647-9a88-e99f20a9baa4"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Delete the named critical data. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the critical data to delete. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/vfs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the structure of the VFS. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["14aace1e-69a6-4332-b0ad-421b1bd90886"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/network/interfaces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of available network interfaces. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["98ad8616-5af8-4bb3-9064-0aef591304f9"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/update/install": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Install the specified manifest on the specified device. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["e8d68f31-0539-4762-bca3-42621db472f1"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/update/available": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the available updates across all available storage devices. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["20877b11-e427-489a-8604-e9fe439eaef2"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/handle/assembly:core:board:macro:agitator:agit/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Run an agitation test. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/terminal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of currently open terminal connections. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["b828df17-30f8-4283-bd9a-d145b39f956b"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/terminal/close/{connId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Close an existing terminal connection (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The connection to close. */
                    connId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/terminal/open": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Open a new terminal connection to the primary node. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["15ca5dc2-554a-48cc-8875-5c0644a90526"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/terminal/open/{nodeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Open a new terminal connection to the specified node. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The nodeId to connect to. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["15ca5dc2-554a-48cc-8875-5c0644a90526"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/manifest/node": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the resolved node manifest. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["dc519634-a8fa-4273-806f-291007ea5742"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/manifest/device": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the resolved device manifest. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["59d5cf7c-6499-41ca-ae48-49cfd6e1e3c4"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/manifest/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the software info description of the active manifest. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["5c667367-d0e8-44b1-ade2-f42bb0a29d3d"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/microCalibration/report/{board}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return calibration report for the specified board. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the board to return the report for. */
                    board: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["0f3fa624-6d7a-487f-8cd3-50822d8aab56"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/microCalibration/cal/{pump}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return calibration data for the specified pump. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump to return calibration data for. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["73e183c2-5940-447f-897b-3e3fe64b7e49"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/microCalibration/cal/{pump}/running/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the running calibration value of the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump to return calibration data for. */
                    pump: string;
                    /** @description The calibration value in range of [26..42>. */
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/microCalibration/cal/{pump}/code/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set pump baseline and running calibration using the code on the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump to return calibration data for. */
                    pump: string;
                    /** @description The code from the sticker on the pump. */
                    code: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/microCalibration/cal/{pump}/baseline/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the baseline calibration value of the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump to return calibration data for. */
                    pump: string;
                    /** @description The calibration value in range of [26..42>. */
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/microCalibration/cal/{pump}/both/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the running and baseline calibration value of the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump to return calibration data for. */
                    pump: string;
                    /** @description The calibration value in range of [26..42>. */
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/pumpEvents/replaceLine/{holder}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Indicate that the lines associated with holder have been replaced. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The holder associated with the replaced line. */
                    holder: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/pumpEvents/replacePump/{pump}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Indicate that the specified pump has been replaced. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The pump that has been replaced. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/auth/pincode/{pin}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attempt to authenticate using the specified pincode. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The pincode to authenticate with. */
                    pin: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/auth/role": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the currently active role of the ui. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["44c44514-367d-43ae-93d2-65099112660d"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/localization/context/{*path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the context with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["d050536c-4774-44a5-b7c3-effd73bcac63"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/localization/contexts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of registered contexts. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["34d40d03-9832-4104-a681-91589cb87f88"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/insertion/filters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the filters in the chain. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["c1a211c9-1335-4393-a436-12d4a890385f"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/descriptor/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the entire descriptor for the HandleAware object with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the object to return the descriptor for. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/descriptor/{path}/{dotted}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the entire descriptor for the HandleAware object with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the object to return the descriptor for. */
                    path: string;
                    /** @description Dotted notation subset of the descriptor to return. */
                    dotted: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return available browser instances. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a7362d8d-60f0-499f-9922-9bc90a2d96d2"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/redirect": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Redirect to the url in the request param. Used internally for redirect based navigation. (v1.0) */
        get: {
            parameters: {
                query?: {
                    /** @description The url to redirect to. */
                    url?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/{nodeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the url for the browser associated with the specified nodeId and null name. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description NodeId of the browser to update. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["b00871f2-36d7-4708-aa01-70a6faadd00b"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/{nodeId}/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the url for the browser associated with the specified nodeId and name. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description NodeId of the browser to update. */
                    nodeId: string;
                    /** @description Name of the browser on the node. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["b00871f2-36d7-4708-aa01-70a6faadd00b"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/intent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Navigate using the supplied BrowserIntent object. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["96ac11c9-1411-4557-98b4-6057bf172160"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/browser/url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Navigate using the supplied BrowserUrl object. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["1228d949-8cd9-4120-a2e7-354524950553"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/soldOuts/container/{pump}/{reason}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a sold out trouble for the container attached to the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle for the pump. */
                    pump: string;
                    /** @description Reason for the trouble. */
                    reason: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/soldOuts/slice/{pump}/{reason}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a sold out trouble for the container attached to the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle for the pump. */
                    pump: string;
                    /** @description Reason for the trouble. */
                    reason: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/soldOuts/troubles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all existing SoldOutAware troubles. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["2b1d9376-c63d-40cc-8d8d-a1f5a84f51db"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/soldOuts/db": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the sold out data from the database. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["0ecafeb4-7898-4565-983e-e6338037f3f7"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/storage/devices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the available storage devices. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ae07d191-7642-4136-b5f9-801e933e65ef"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/brandset/nutrition/{bevId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the nutrition info for the specified beverageId at the specified volume. This returns
         *     nutrition data for the preferred recipe of the specified beverage. This is not necessarily the
         *     recipe that will be used to pour. (v1.0) */
        get: {
            parameters: {
                query?: {
                    /** @description Reqeust param that is comma separated list of volumes. */
                    volumes?: components["schemas"]["cfcc5834-c9d4-48b2-b3a4-d776f59eac3d"];
                };
                header?: never;
                path: {
                    /** @description The beverageId to return nutrition data for. */
                    bevId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fe79a842-ecf0-4df3-ba9a-a9dee3aec14e"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/brandset/grantProperties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the grant properties currently in effect. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
                    };
                };
            };
        };
        put?: never;
        /** Set the grant properties to use with the active brandset. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/regions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of known regions (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ad465c99-94c3-41ba-8669-c2825950db66"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/regions/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return available unit systems and time / date formats. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["56582020-fd4c-4051-9405-80b7a4da0fec"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/ice/types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of availble ice types (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/ice/type/{path}/{type}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the ice type for the specified ice agitator. This will set the type as well as apply
         *     all the default settings for that type to the agitator configuration. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the ice agitator. */
                    path: string;
                    /** @description Ice type for the agitator. */
                    type: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/read/float/{boardPath}/{index}/{subIndex}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read a float from the specified subnode. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    boardPath: string;
                    index: number;
                    subIndex: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": number;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/read/int/{boardPath}/{index}/{subIndex}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Read an int from the specified subnode. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    boardPath: string;
                    index: number;
                    subIndex: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": number;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return CAN hardware stats. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["d9a451d6-0449-412f-affa-0feb54919041"];
                    };
                };
            };
        };
        put?: never;
        /** Reset the CAN hardware stats. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/stats/raw": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return raw CAN hardware stats (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["d9a451d6-0449-412f-affa-0feb54919041"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/write/byte/{boardPath}/{index}/{subIndex}/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Write a byte to the specified subnode. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    boardPath: string;
                    index: number;
                    subIndex: number;
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/write/short/{boardPath}/{index}/{subIndex}/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Write a short to the specified subnode. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    boardPath: string;
                    index: number;
                    subIndex: number;
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/write/float/{boardPath}/{index}/{subIndex}/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Write a fload to the specified subnode. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    boardPath: string;
                    index: number;
                    subIndex: number;
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/can/write/int/{boardPath}/{index}/{subIndex}/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Write an int to the specified subnode. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    boardPath: string;
                    index: number;
                    subIndex: number;
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/ncui/reboot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reboot Dispenser (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/ncui/plugins": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of ncui plugins (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ee9d9436-8aec-4f1c-a1b2-1b07c5d19bc6"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/ncui/open": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Navigate to the ncui (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/copyLogs/eraseAndCopy/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Erase the old contents and copy logs to the specified volume. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the volume */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["7bffb5ed-e541-4fbd-92a0-d9c32de0fce8"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/copyLogs/volumes/size": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Fetch list of volumes available for the storage derive. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["d5e6b98d-fee4-4256-b60d-46f5a12b759e"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/copyLogs/files/size": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Fetch the size of the log files available at the device. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": number;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/copyLogs/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Copy logs to the specified volume. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the volume */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
                    };
                };
            };
        };
        /** Erase the contents of the specified volume. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the volume */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/cui": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of cui's (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["0b96307a-98a1-4e6d-876c-0fc688e207cb"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/cui/open": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Navigate to the active cui (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/openapi/{*baseUrl}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns OpenAPI docs for all endpoints below the specified base URL. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description All endpoints below this baseUrl are returned. */
                    baseUrl: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/octet-stream": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns all existing ingredient assigments. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["97d82f73-d72e-404b-b10c-9052ef6ded41"];
                    };
                };
            };
        };
        put?: never;
        /** Create a new ingredient assignment for the specified holder. If an existing
         *     assignment exists for the holder, it will be removed as part of adding the
         *     new mapping. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["56889214-2228-45a5-9ff9-d5ae391240d6"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["56889214-2228-45a5-9ff9-d5ae391240d6"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/assignments/{holderPath}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete an existing ingredient mapping for the specified holder. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The handle path for the holder */
                    holderPath: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/network/reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of available test reports. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["0ccb9c34-bfa1-4ad8-85ae-0c9722369832"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/network/tests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of available tests. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["31a3b1ed-34d3-48c9-9296-d83ba11fdd51"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/network/tests/run/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Run the specified network test. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the test to run. */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/network/tests/run/group/{group}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Run all the network tests in the specified group. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the group of tests to run. */
                    group: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/ingredients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of all currently known ingredients by sourceId. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["4b872d39-9054-43ea-94d9-9020fe1d852f"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/ingredients/sources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of all currently known sources. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/handles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of all defined handle paths. Handles use weak references to their associated
         *     beans which means that handles may exist for some time after the associated bean is
         *     no longer accessible or garbage collected. This endpoint exists primarily as a debugging
         *     resource and should not be used as the primary source of information about what objects
         *     actually exist in the system. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/handles/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a HandleView-constrained view of the bean associated with the handle path. By marking
         *     various properties of HandleAware objects with HandleView, this endpoint can be used to
         *     provide some visibility into internal state for use in testing and debugging. This data should
         *     not be used for any production function, as the data returned is not guaranteed to be stable
         *     over time due to the purpose of this being debugging data. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the object to return. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/handles/{path}/{view}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a named view-constrained view of the bean associated with the handle path. By marking
         *     various properties of HandleAware objects with specified view, this endpoint can be used to
         *     provide a specific view of a given bean graph. Custom views can be registered with HandleService
         *     for use with this endpoint. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path of the object to return. */
                    path: string;
                    /** @description Name of the view to apply to the bean. */
                    view: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/handles/views": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of available named views for use with /{path}/{view} endpoint. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/ingredient/pour/{path}/{intent}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pour the specified intent using the specified pump. A given intent may be defined differently
         *     for different pumps based on various rules. This endpoint causes the specified intent for
         *     the specified pump to be poured. This may fail for reasons such as the pump already being in
         *     use, no access to the nozzle lock and so on. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump. */
                    path: string;
                    /** @description Name of the intent to pour. */
                    intent: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/ingredient/intent/{path}/{intent}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the definition of the specified intent for the specified pump. A given intent may
         *     be defined differently for different pumps based on various rules. This endpoint provides
         *     an easy way to verify that a particular intent for a given pump is actually as expected. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump. */
                    path: string;
                    /** @description Name of intent to return. */
                    intent: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["8b12672f-3ed4-45f0-99bf-17c9597ef6a0"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/ingredient/intent/{path}/{intent}/volume": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the estimated volume (in ml) for the specified intent using the specified pump. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump. */
                    path: string;
                    /** @description Name of intent. */
                    intent: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["08b20c38-cdbb-4d01-ad22-e956bfdb8423"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/ingredient/intent/{path}/{intent}/time": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the estimated time (in ms) for the specified intent using the specified pump. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the pump. */
                    path: string;
                    /** @description Name of intent. */
                    intent: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["815eadb4-c076-4b0a-9bcd-ab3c0e4a32b0"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all metrics in the system. This should only be used for debugging. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["52677c14-b74b-486f-b143-48704fada009"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics/names": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the names of all global metrics. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the named global metrics object. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the metrics to return. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["afab38b7-7a3a-4e4d-93ee-2e5b33c1090f"];
                    };
                };
            };
        };
        put?: never;
        /** Create / reset the named global metrics object. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the metrics to create / reset. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove the named global metrics object. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the metrics to remove. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics/{nozzle}/names": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the names of all metrics for the nozzle. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the nozzle to query. */
                    nozzle: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/metrics/{nozzle}/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the named metrics object for the nozzle. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the nozzle to query. */
                    nozzle: string;
                    /** @description Name of the metrics to return. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["afab38b7-7a3a-4e4d-93ee-2e5b33c1090f"];
                    };
                };
            };
        };
        put?: never;
        /** Create / reset the named metrics object for the nozzle. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the nozzle to query. */
                    nozzle: string;
                    /** @description Name of the metrics to create / reset. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove the named metrics object for the nozzle. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the nozzle to query. */
                    nozzle: string;
                    /** @description Name of the metrics to remove. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/lockout/unlock/{pin}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** unlock CUI with provided pin. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description authenticate with provided pin. */
                    pin: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/setup/complete/{stepName}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Complete a specific setup step. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of step to mark complete in database */
                    stepName: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/setup/steps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the completed steps. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fb27daaf-18f9-4ed2-bb41-59f5ba1f292d"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/app/kosdev.ddk/setup/steps/reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Clear the completion state of all the setup steps. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/schema": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return schema data about all known config data. This describes the structure of every known
         *     ConfigBean. This is used by kOS Studio tools. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["e2511c2e-b9be-436b-9b38-21a263391238"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/schema/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return schema data about the ConfigBean identified by the handle path. This describes
         *     the structure of the config bean for use by tools in kOS Studio. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["07a793c0-d422-4ddf-a1b6-4688c3a4bd53"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the ConfigBean associated with the specified handle path. This is actual
         *     configuration object in memory and reflects the actual configuration values
         *     visible to the associated bean. This only works for beans that exist on this node. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The handle path to a bean containing a configuration. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a1310ef7-88c8-47d2-94b8-3734170a7028"];
                    };
                };
            };
        };
        put?: never;
        /** Update the ConfigBean associated with the specified handle path. This will update
         *     the actual configuration object in memory as well as update the database to persist
         *     the changes so they will be applied on reboot.
         *
         *     If a value is set to the default value then the new value will not be stored in
         *     the database and any previous value will be removed. This allows changes in default
         *     values to be made in future release without having the old defaults locked into the
         *     database.
         *
         *     Whether an object reacts in real time to changes in the configuration is up to the
         *     implementation of the bean. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The handle path to a bean configuration to update. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["13f43ab1-b5a3-4819-9c0d-dd1ff32e364c"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["7b4b8b40-a48d-45d5-ab4f-ee7d5c314b7c"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/details/{options}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return configuration details from all available ConfigSources. This will return both
         *     default values and override values for all handle paths known by all sources. This is
         *     useful for tooling and for inspecting what changes have been persisted in the config
         *     service.
         *
         *     A stock kOS install defines default values as the initial values of a config bean as
         *     set in the bean constructor with any values from system xml files loaded on top.
         *     Override values are any changes applied via endpoints which are persisted in the database.
         *
         *     As it is also possible to insert new ConfigSources into the config service which can
         *     have higher priority than other sources, this is also useful to see what the effective
         *     default and override values are for the active sources. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Bitwise OR of options that identify the data to return: 1=bean, 2=overrides,
                     *     4=defaults, 8=schema */
                    options: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["892a751c-ec19-40b4-9a10-aace56663981"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/details/{path}/{options}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the config details for the specified handle path. See /details for a
         *     description of config details. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The handle path to return config details for. */
                    path: string;
                    /** @description Bitwise OR of options that identify the data to return: 1=bean, 2=overrides,
                     *     4=defaults, 8=schema */
                    options: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["892a751c-ec19-40b4-9a10-aace56663981"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update multiple ConfigBeans in a single call. See /{path} for details about the
         *     update process. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["88e5aed6-e3e4-4f35-9d8f-5f3645c833fd"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["7b4b8b40-a48d-45d5-ab4f-ee7d5c314b7c"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/value/merged/{scopedPath}/{attr}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return merged value of the scoped config bean attribute. This merges all
         *     scopes up from the specified scope starting scope. By specifying a nodeId
         *     scope, you get the same values that the node would actually see. By using
         *     a higher level scope, you can see the merged value for that scope which
         *     is useful for debugging and for settings compliance. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    scopedPath: string;
                    /** @description Name of attribute to return */
                    attr: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["070f31fc-d099-4c21-9450-b6daa86cf30c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/value/{scopedPath}/{attr}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return value of the scoped config bean attribute. This merges defaults and overrides
         *     but only for the scope specified in the path. This is useful for examining just a
         *     single value at a single scope in the scope stack. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    scopedPath: string;
                    /** @description Name of attribute to return */
                    attr: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["070f31fc-d099-4c21-9450-b6daa86cf30c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/bean/defaults/{scopedPath}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the defaults for a particular scoped path. This is only defaults in
         *     the specified scope. Useful for debugging. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    scopedPath: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/bean/merged/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return merged values for the specified path using the default scope of the node.
         *     This most closely resembles how config beans are set on this node. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/config/bean/overrides/{scopedPath}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the overrides for a particular scoped path. This is only overrides
         *     in the specified scope. Useful for debugging. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Handle path for the ConfigBean */
                    scopedPath: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fuelGauges/{holder}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the fuel gauge for the holder. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the holder with the fuel gauge. */
                    holder: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["a8f94084-9529-42a6-b006-c1010c8e59d4"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fuelGauges/{holder}/{val}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set fuel gauge to the specified value. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path to the holder with the fuel gauge. */
                    holder: string;
                    /** @description Value of the fuel gauge. */
                    val: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/resume/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Resume the specified downloader. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel the current download. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/cancel/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel the active download for the specified downloader. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/paused": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the names of the paused downloaders. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/pause/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pause the specified downloader. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/ota/artifacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the current list of artifacts in the active OTA session. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["2f300e9b-ab72-4436-b8d0-289bcc818d35"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/troubles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return all available troubles. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["4acae015-5495-4db3-92f6-557525f055c7"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/troubles/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attempt to resolve all the trouble id's listed in the request body. Troubles marked as
         *     resolvable can generally execute logic that will resolve the underlying issue without
         *     the caller needing any knowledge or details of the underlying process. It a trouble
         *     is successfully resolved it will be removed from the list, otherwise it will remain
         *     in the list. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["857f89bc-f853-44c3-aa94-05d0ea316dcb"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/troubles/resolve/{troubleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Attempt to resolve the specified trouble. Troubles marked as resolvable can generally
         *     execute logic that will resolve the underlying issue without the caller needing any
         *     knowledge or details of the underlying process. It a trouble is successfully resolved
         *     it will be removed from the list, otherwise it will remain in the list. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the trouble to resolve. */
                    troubleId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/troubles/{troubleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the specified trouble. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the trouble to return. */
                    troubleId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["f448ddd6-2c67-4f84-91a7-eb435345b476"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/future/traces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of available future traces. Every future captures a trace of events that
         *     allow the future to be analyzed. A future can also declare itself a child of another future
         *     in which case the trace for the child future becomes a child of the parent trace which
         *     ensures that parent traces can be analyzed with full context. The future service maintains
         *     a limited queue of traces and this endpoint returns the contents of the queue. This
         *     only includes the trace objects which describe structure and existence but no events.
         *     Use the events endpoint to fetch the event list for any future in the trace
         *
         *     As trace data is held in a queue, new traces will cause existing traces to be removed
         *     which means event data may not be available some time after this endpoint reports
         *     the existence of the trace. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fe888288-e811-49ce-b642-3609c0e920b0"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/future/traces/{traceId}/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the events for the specified trace. Since traces are held in a queue in future service
         *     it's possible that new traces have pushed previous traces out of the queue and the events are
         *     no longer available.
         *
         *     Event data contains both timestamps and an index. While the timestamps are ms resolution,
         *     this may not be sufficient to determine event order. The index is global across every
         *     trace event and should be used to determine the order of events. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the trace to return events for. */
                    traceId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["abe2eeed-cba3-43db-a83b-381b8a32414c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/future/{futureId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel the specified future if not already completed. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the future to cancel. */
                    futureId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/engine/nutrition/{bevId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the nutrition info for the specified beverageId at the specified volume. This returns
         *     nutrition data based on the actual recipe that will be used to pour which is determined by
         *     the availability of ingredients. (v1.0) */
        get: {
            parameters: {
                query?: {
                    /** @description The volumes to compute nutrition data for. */
                    volumes?: components["schemas"]["cfcc5834-c9d4-48b2-b3a4-d776f59eac3d"];
                };
                header?: never;
                path: {
                    /** @description The beverageId to return nutrition data for. */
                    bevId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fe79a842-ecf0-4df3-ba9a-a9dee3aec14e"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/state/paths": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the paths of all registered state beans. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/state/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the state bean with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the state bean to return. */
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["399429fd-2817-4f96-9a4a-af39d6e37c45"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/cms/screens/context/{*path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the context with the specified path. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    path: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["c3234a16-40dc-4272-83cc-28fdcdb58407"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/cms/screens/contexts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of registered contexts. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["56d81078-c1b8-419c-a492-8236d6fe292a"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/log/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of log groups on this node (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/log/overrides": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all the overrides stored in the database. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["2543fbff-ca64-4be3-93e7-f103191aed07"];
                    };
                };
            };
        };
        put?: never;
        /** Create or update an override (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["544a98cc-5acd-457d-9adb-31dc31ad1d3c"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove an override (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["544a98cc-5acd-457d-9adb-31dc31ad1d3c"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/log/overrides/{nodeType}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all the overrides stored in the database for the specified nodeType. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Node type to return overrides for. */
                    nodeType: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["2543fbff-ca64-4be3-93e7-f103191aed07"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/log/overrides/{nodeType}/{typePrefix}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all the overrides stored in the database for the specified nodeType and type prefix (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Node type to return overrides for. */
                    nodeType: string;
                    /** @description Override type prefix to return. */
                    typePrefix: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["2543fbff-ca64-4be3-93e7-f103191aed07"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/calibration/{pump}/calibrate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform calibrate pour on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["86fe43fb-8924-470e-ad54-477ad16faf41"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/calibration/{pump}/preCalibrate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform pre-calibrate pour on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["86fe43fb-8924-470e-ad54-477ad16faf41"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/calibration/{pump}/verify/{calVolume}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Perform verify pour on fcm. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                    /** @description The volume poured during calibration in ml. */
                    calVolume: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["86fe43fb-8924-470e-ad54-477ad16faf41"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/calibration/{pump}/baseline": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the baseline calibration for the pump. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["c07b668d-aea2-4b24-8935-5081afa560c5"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/calibration/{pump}/baseline/{value}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the baseline calibration for the pump. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                    /** @description The calibration value. */
                    value: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/freestyle/fcm/calibration/{pump}/complete/{calVolume}/{verifyVolume}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Confirm the verify volume poured. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Path of the fcm to operate on. */
                    pump: string;
                    /** @description The volume poured during calibration in ml. */
                    calVolume: number;
                    /** @description The volume poured during verification in ml. */
                    verifyVolume: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/device": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the device definition. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["21b4ef3c-e858-4693-9788-838bda6e324a"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/device/assemblies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the device assemblies. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["21b4ef3c-e858-4693-9788-838bda6e324a"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/device/serialNumber": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the serial number of the device. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/device/serialNumber/{serialNum}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set the serial number of the device. This may fail if the serial number provider is not ready yet. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The new serial number for the device. */
                    serialNum: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/select": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the definition object from the currently selected pourable. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        };
        put?: never;
        /** Set the currently selected pourable based on the provded definition object. The definition will be
         *     passed to the pour engine so the id can be anything that the pour engine supports. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": string;
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Clear the currently selected pourable. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/pour": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pour the currently selected pourable using the max pour volume of the pipeline. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/fixed/{name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pour the currently selected pourable as a fixed pour with the specified volume name. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the volume to pour from PourServiceDelegate. */
                    name: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/availability": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the availability information for the graph. This includes all groups and tags.
         *     This is typically the endpoint used to fetch availability state from the server and
         *     then maintain by merging events that contains deltas. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["700571fa-678b-435c-bc9c-1a5b431deb28"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/availability/groups/{group}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the availability information for the specified group. This is convenient when only
         *     a single group is needed, such as when debugging an engine implementation so the payload
         *     is smaller and easier to examine. Typical production code would use the /availability
         *     endpoint to get all availability information in a single response. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    group: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["4be9ab08-c110-4ccc-9737-3beee461ff77"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/graph/node/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the availability dependency graph for the specified id in the graph. This will
         *     provide a downward looking view of the graph which can be used to determine how the
         *     visibility / availability of the specified id was determined. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node in the graph to view. */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["9300f683-5343-4971-b8d8-8c76996d876e"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/graph/beverages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the availability dependency graph for all beverages. This will provide a
         *     downward looking view of the graph which can be used to determine how the
         *     visibility / availability of the beverages was determined. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["5c530aff-a6d8-476c-9913-8f4840caf8fa"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/ext/dispense/nozzle/nozzle/pipeline/beverage/graph/nodes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the entire beverage graph as a list of individual nodes. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["31059e05-b5e6-43b7-a38b-42654933050c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/reboot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reboot the entire device. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/node/{nodeId}/reboot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reboot the specified node. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/node/{nodeId}/blockedManifests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of blocked manifests for the specified node. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["b81b07ae-b6cc-4d9c-afad-99891c9bdb92"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /** Clear the list of blocked manifests on the specified node. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/node/{nodeId}/blockedManifests/{manifestId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add the specified manifestId to the blocked list on the specified node. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description The manifestId to add to the block list. */
                    manifestId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove the specified manifestId from the blocked list on the specified node. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description The manifestId to remove from the block list. */
                    manifestId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/blockedManifests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of blocked manifest ids. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/nodeMgr/blockedManifests/{manifestId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add the specified manifestId to the blocked list on the primary node, which will cause a rollback if active. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The manifestId to add to the block list. */
                    manifestId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Remove the specified manifestId from the blocked list on the primary node. (v1.0) */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description The manifestId to remove from the block list. */
                    manifestId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext$CtxNamespace) */
        "7a15f223-382d-450d-a5c5-1b65d03d4eda": components["schemas"]["c9826fe3-1f63-47e0-b100-a9239cd578cd"];
        "a7362d8d-60f0-499f-9922-9bc90a2d96d2": components["schemas"]["3a04863c-137b-4aea-b42e-2f83547a0e21"][];
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info) */
        "11d116a8-45e5-48fa-bc37-1319e08c12e9": components["schemas"]["67ac1d0c-31b0-4392-a5bb-b8500ffdf0b9"];
        "857f89bc-f853-44c3-aa94-05d0ea316dcb": number[];
        /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
        "cb0d6cbd-1e30-4e5b-b9f7-678cfb1712b8": components["schemas"]["a2321cd1-241f-45dd-bc45-3bcda14763b9"];
        "498d2d13-c88c-4eb1-b337-7da529547bd1": {
            val?: string;
            name?: string;
            passed?: boolean;
        };
        "b81b07ae-b6cc-4d9c-afad-99891c9bdb92": string[];
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info) */
        "4d5343a8-e8db-4bc3-a556-46004800db21": components["schemas"]["07f070ba-f810-464e-ab3e-5f8cfb0e4521"];
        "11e8068f-bcac-460a-a04b-6aeb3a77d682": components["schemas"]["e1d43445-a860-41c5-adc2-7838a3daa813"][];
        "7bffb5ed-e541-4fbd-92a0-d9c32de0fce8": {
            reason?: string;
            note?: string;
            /** @description (typeName=com.tccc.kos.commons.util.ReasonData) */
            reasonData?: components["schemas"]["0d7abbb2-673d-402c-aea9-11dd54b7d9fd"];
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureState) */
            endState?: components["schemas"]["570b2b57-303c-481e-a58f-de7255aef8be"];
            /** Format: int32 */
            index?: number;
            /** Format: int32 */
            abortAbandonedTimeoutMs?: number;
            childReason?: string;
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureWork) */
            rootFuture?: components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
            tracker?: string;
            /** Format: int64 */
            remainingTimeMs?: number;
            name?: string;
            /** Format: int32 */
            progress?: number;
            /** Format: int32 */
            id?: number;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["1c000dfe-beb7-43bb-bd37-e3a211351676"];
        };
        "96ac11c9-1411-4557-98b4-6057bf172160": {
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            browserId?: components["schemas"]["29218194-d080-40e1-bf77-04b9b11f4455"];
            type?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.Object>) */
            properties?: components["schemas"]["13f43ab1-b5a3-4819-9c0d-dd1ff32e364c"];
        };
        "3a04863c-137b-4aea-b42e-2f83547a0e21": {
            defaultHost?: string;
            lastUrl?: string;
            online?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            id?: components["schemas"]["d6104558-5162-473f-9dc8-4d6018041646"];
        };
        "bc2d39d1-a577-4ccc-b791-486e548852e5": {
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            defaults?: components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
            scope?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            overrides?: components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
        };
        "d6104558-5162-473f-9dc8-4d6018041646": unknown;
        "f17e7079-b642-4c1a-a195-fd8d9575a552": {
            name?: string;
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            artifacts?: components["schemas"]["6838ab0b-64f5-479e-8603-d150ec7ebae2"];
        };
        "faa4b7ba-29af-4f30-beb3-b11bf5ccaec6": unknown;
        "ce91f163-d770-448e-ad51-4e49c3493700": {
            country?: string;
            timeFormatId?: string;
            hidden?: boolean;
            unitSystemId?: string;
            id?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            timeZones?: components["schemas"]["b81b07ae-b6cc-4d9c-afad-99891c9bdb92"];
            dateFormatId?: string;
        };
        "3f79f05d-dd98-4716-8a9b-e3ab59584567": {
            defaultLocale?: string;
            file?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            fallbacks?: components["schemas"]["b81b07ae-b6cc-4d9c-afad-99891c9bdb92"];
            kabId?: string;
        };
        "b1633ee4-edc2-4b6f-9c0a-b56c7a1cddfb": {
            /** Format: double */
            running?: number;
            noStorage?: boolean;
            /** Format: double */
            baseline?: number;
            calibrated?: boolean;
        };
        "166d44a1-4f73-4edd-a67a-828f5505052d": {
            inProgress?: boolean;
            name?: string;
            id?: string;
            passed?: boolean;
            /** Format: int64 */
            failureTime?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.ddk.service.network.TestResult>) */
            results?: components["schemas"]["2c7be2ef-20cd-442e-82d5-6476f8a19c7b"];
            /** Format: int64 */
            timestamp?: number;
            info?: Record<string, never>;
            group?: string;
        };
        "f7ec87b1-3636-4982-b7f7-607586fe83ac": components["schemas"]["f38cb2ee-e407-425d-a68f-13bc585c37d7"][];
        "59d5cf7c-6499-41ca-ae48-49cfd6e1e3c4": {
            incomplete?: boolean;
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedDeviceManifest$ManifestInfo>) */
            manifestInfoChain?: components["schemas"]["b9c80dd9-b3c0-4ec1-b4e2-3f513d0e8a43"];
            /** @description (typeName=com.tccc.kos.commons.manifest.DeviceManifest) */
            deviceManifest?: components["schemas"]["c644c6fe-dee5-4c20-8a62-616bbff00f6d"];
            manifestId?: string;
        };
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext) */
        "34d40d03-9832-4104-a681-91589cb87f88": components["schemas"]["d050536c-4774-44a5-b7c3-effd73bcac63"];
        "56582020-fd4c-4051-9405-80b7a4da0fec": {
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.format.date.DateFormat>) */
            dateFormats?: components["schemas"]["c8398622-ac1d-406a-8f1e-63c92abd5172"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.units.UnitSystem>) */
            unitSystems?: components["schemas"]["b8cebb14-ebf8-42bc-bd85-e94728ced2c6"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.format.time.TimeFormat>) */
            timeFormats?: components["schemas"]["3ee9f32c-4e58-4b9e-9075-ea33ea519f24"];
        };
        "8b12672f-3ed4-45f0-99bf-17c9597ef6a0": {
            /** Format: int64 */
            estimatedTime?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.dispense.pipeline.ingredient.ops.PumpOp>) */
            ops?: components["schemas"]["aeda5d83-ccf7-4ce6-9bb6-963e8865a142"];
            name?: string;
            errorHandlerId?: string;
            delegated?: boolean;
            source?: string;
            type?: string;
            /** Format: double */
            estimatedVolume?: number;
            /** @description (typeName=com.tccc.kos.ext.dispense.pipeline.ingredient.ops.PumpOp) */
            activeOp?: components["schemas"]["a1a8a28e-38fa-4f0c-807f-4212efe7f0c4"];
            runDry?: boolean;
        };
        "20877b11-e427-489a-8604-e9fe439eaef2": components["schemas"]["b409a589-507a-4790-9739-c1e878704032"][];
        "2a364eec-8033-4af0-84c2-9cca6b59353c": unknown;
        "07a793c0-d422-4ddf-a1b6-4688c3a4bd53": {
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.service.config.MethodPair$MethodSchema>) */
            schema?: components["schemas"]["d4c83f0a-3c37-49eb-902f-da0ebb22a2a5"];
            /** @description (typeName=java.util.List<java.lang.String>) */
            paths?: components["schemas"]["b81b07ae-b6cc-4d9c-afad-99891c9bdb92"];
        };
        "49eded42-2ef8-4008-8d12-f606126bba95": components["schemas"]["e1d43445-a860-41c5-adc2-7838a3daa813"][];
        "2991f30c-01c1-4912-b2f5-36e2654b2d76": components["schemas"]["112c87e0-7591-4b43-a59e-0ae719238afe"][];
        "4be9ab08-c110-4ccc-9737-3beee461ff77": components["schemas"]["aaa36de4-8f51-4192-9839-d88ca9a5d0c8"][];
        "3d8c963b-b751-460c-9235-b0cf596d42ed": {
            /** Format: int64 */
            totalBytes?: number;
            /** Format: int64 */
            freeBytes?: number;
        };
        "dc519634-a8fa-4273-806f-291007ea5742": {
            incomplete?: boolean;
            /** @description (typeName=com.tccc.kos.commons.manifest.NodeManifest) */
            nodeManifest?: components["schemas"]["91cd7171-d74f-413b-a866-8fc82eb14eb7"];
            /** @description (typeName=java.util.Set<com.tccc.kos.core.manifest.ResolvedManifestArtifact>) */
            layers?: components["schemas"]["49eded42-2ef8-4008-8d12-f606126bba95"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.manifest.ManifestArtifact>) */
            missingArtifacts?: components["schemas"]["cdda55a6-1440-4d0f-8252-cfe2be294d8f"];
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedManifestSection>) */
            sections?: components["schemas"]["1e5dffd2-469e-4e35-b5db-389520ba99b8"];
        };
        "1d31c37b-0d8a-411c-9d6a-4b54f959d024": {
            /** Format: double */
            position?: number;
            /** Format: double */
            group?: number;
        };
        "0c902635-46c2-4583-93fb-d16272b3c214": {
            default?: boolean;
            measure?: string;
            /** Format: double */
            offset?: number;
            /** Format: int32 */
            decimals?: number;
            name?: string;
            /** Format: double */
            scale?: number;
            alias?: string;
        };
        "afed09c7-a0ef-478b-9bfe-2e0888dac857": {
            /** Format: int32 */
            apFlags?: number;
            bssid?: string;
            /** Format: int32 */
            wpaFlags?: number;
            /** Format: int32 */
            bitrate?: number;
            ssid?: string;
            /** Format: int32 */
            signal?: number;
            /** Format: int32 */
            rsnFlags?: number;
            /** Format: int32 */
            lastSeenAgo?: number;
            /** Format: int32 */
            frequency?: number;
        };
        "b4159f44-469d-41aa-b3dd-044dd8aebce5": unknown;
        "aaa36de4-8f51-4192-9839-d88ca9a5d0c8": {
            note?: string;
            visible?: boolean;
            available?: boolean;
            id?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            taggedIds?: components["schemas"]["b81b07ae-b6cc-4d9c-afad-99891c9bdb92"];
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["1c000dfe-beb7-43bb-bd37-e3a211351676"];
            altId?: string;
        };
        "dba8a420-fe44-421f-b64d-c6e2c39abd85": {
            deviceType?: string;
            nextManifestId?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
            installArtifacts?: components["schemas"]["a2321cd1-241f-45dd-bc45-3bcda14763b9"];
            name?: string;
            manifestType?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
            installLayers?: components["schemas"]["a2321cd1-241f-45dd-bc45-3bcda14763b9"];
            /** Format: int32 */
            version?: number;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
            /** @description (typeName=java.util.Map<java.lang.String, java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>>) */
            sections?: components["schemas"]["cb0d6cbd-1e30-4e5b-b9f7-678cfb1712b8"];
        };
        "0b4bc4bd-857e-4e0c-8fc4-421c4f7fd270": unknown;
        "c644c6fe-dee5-4c20-8a62-616bbff00f6d": {
            deviceType?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
            /** @description (typeName=com.tccc.kos.commons.manifest.device.ManifestDeviceInfo) */
            deviceInfo?: components["schemas"]["10490660-7454-4d49-9290-6a061353739d"];
        };
        "cadafecf-e2c9-48a7-9b9f-d3724a42069e": {
            name?: string;
            value?: string;
        };
        "5e27df19-c54b-43e0-a5e2-55defb863e09": components["schemas"]["2fda101c-3403-4f21-9529-74140838ba19"][];
        "a1a8a28e-38fa-4f0c-807f-4212efe7f0c4": {
            /** @description (typeName=java.util.Set<com.tccc.kos.ext.dispense.pipeline.ingredient.ops.PumpOp$Grant>) */
            grants?: components["schemas"]["44b0713e-7620-4157-b842-686cab58fc3d"];
            diluted?: boolean;
            /** Format: double */
            rate?: number;
            errorHandlerId?: string;
            type?: string;
        };
        "cf160cc5-cdf0-4c39-ad65-1c7751ff9224": components["schemas"]["73e183c2-5940-447f-897b-3e3fe64b7e49"][];
        "c83b62a3-6900-4f34-a411-15cae0653b2f": {
            /** @description (typeName=com.tccc.kos.commons.manifest.BaseManifestArtifact) */
            artifactInfo?: components["schemas"]["79aee426-ad29-402a-b1ac-f69b161bb184"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.core.primary.service.ota.OTADownloadRequest>) */
            requests?: components["schemas"]["13bd7298-2d35-44d3-8fa3-94c54bd2ec06"];
            error?: string;
            done?: boolean;
            /** @description (typeName=com.tccc.kos.core.primary.service.ota.OTAArtifact$Status) */
            status?: components["schemas"]["8d861532-7fb2-473a-b180-66ea0fc09301"];
        };
        "0e52d0e4-a584-4741-bbb2-265b250f5791": {
            empty?: boolean;
        };
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics) */
        "e716c9a1-228f-4903-baa5-18e5dbadf5f7": components["schemas"]["762c7791-9849-440d-abd6-895060dc87c3"];
        "31d1bf07-da45-4b21-b2ab-af486fcca2d1": {
            mfgAuthority?: string;
            /** @description (typeName=com.tccc.kos.commons.util.Mode) */
            mode?: components["schemas"]["0b4bc4bd-857e-4e0c-8fc4-421c4f7fd270"];
            identifier?: string;
            vendorAuthority?: string;
            /** @description (typeName=java.io.File) */
            file?: components["schemas"]["d7b1562d-a61e-45a6-aff6-e84a704cf6cb"];
            /** Format: int32 */
            size?: number;
            /** Format: int64 */
            createTime?: number;
            name?: string;
            tag?: string;
            type?: string;
            version?: string;
            /** Format: date-time */
            createDate?: string;
        };
        "01f1c838-e62b-451d-b6b9-610b360ea6ff": {
            /** @description (typeName=com.tccc.kos.commons.core.service.config.ConfigSchema) */
            schema?: components["schemas"]["07a793c0-d422-4ddf-a1b6-4688c3a4bd53"];
            path?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            defaults?: components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.ConfigDetails$ScopeData>) */
            scopes?: components["schemas"]["c602d3e4-da9b-4274-b4f9-e42abafece7d"];
            /** @description (typeName=com.tccc.kos.commons.core.service.config.ConfigBean) */
            bean?: components["schemas"]["a1310ef7-88c8-47d2-94b8-3734170a7028"];
        };
        /** @description (typeName=com.tccc.kos.commons.core.service.config.BeanChanges) */
        "3e3b3da3-ce84-4ae5-92fe-9309651fd6de": components["schemas"]["ae437889-60b4-4acd-9c6a-4b0011febbfe"];
        "44c44514-367d-43ae-93d2-65099112660d": unknown;
        "2c7be2ef-20cd-442e-82d5-6476f8a19c7b": components["schemas"]["498d2d13-c88c-4eb1-b337-7da529547bd1"][];
        "58acfac8-c237-43e2-9883-4392ebb86940": {
            color?: string;
            /** Format: int32 */
            rank?: number;
            actionRole?: string;
            visibleRole?: string;
        };
        "73e183c2-5940-447f-897b-3e3fe64b7e49": {
            pumpPath?: string;
            /** @description (typeName=com.tccc.kos.ext.freestyle.service.micro.calibration.MicroCalibration) */
            pumpCal?: components["schemas"]["b1633ee4-edc2-4b6f-9c0a-b56c7a1cddfb"];
            /** @description (typeName=com.tccc.kos.ext.freestyle.service.micro.calibration.MicroCalibration) */
            storageCal?: components["schemas"]["b1633ee4-edc2-4b6f-9c0a-b56c7a1cddfb"];
        };
        "544a98cc-5acd-457d-9adb-31dc31ad1d3c": {
            level?: string;
            name?: string;
            type?: string;
            nodeType?: string;
        };
        "97d82f73-d72e-404b-b10c-9052ef6ded41": components["schemas"]["56889214-2228-45a5-9ff9-d5ae391240d6"][];
        "ae437889-60b4-4acd-9c6a-4b0011febbfe": {
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$AttrChange>) */
            scopedChanges?: components["schemas"]["530c4926-3362-4700-97f4-8990e5868fbd"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$AttrChange>) */
            changes?: components["schemas"]["530c4926-3362-4700-97f4-8990e5868fbd"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$Error>) */
            errors?: components["schemas"]["063e455b-7274-44f2-b142-2e7e8a3cdc8e"];
        };
        "aeda5d83-ccf7-4ce6-9bb6-963e8865a142": components["schemas"]["a1a8a28e-38fa-4f0c-807f-4212efe7f0c4"][];
        "a3128520-98e3-4ea5-b7bb-6c9551eea7dd": {
            path?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.Object>) */
            values?: components["schemas"]["13f43ab1-b5a3-4819-9c0d-dd1ff32e364c"];
            scope?: string;
            replace?: boolean;
        };
        "fa77a8c2-7ec1-4d88-8bfa-d9f1caa04063": components["schemas"]["0f4a7a5e-a286-47e6-8d0c-e890fb625fdb"][];
        "44b0713e-7620-4157-b842-686cab58fc3d": components["schemas"]["cadafecf-e2c9-48a7-9b9f-d3724a42069e"][];
        "1c000dfe-beb7-43bb-bd37-e3a211351676": {
            /** @description (typeName=java.lang.Class<?>) */
            view?: components["schemas"]["8fa3924e-3b29-467a-bd40-d898ee08d075"];
            data?: Record<string, never>;
        };
        "a2321cd1-241f-45dd-bc45-3bcda14763b9": components["schemas"]["79aee426-ad29-402a-b1ac-f69b161bb184"][];
        "0f4a7a5e-a286-47e6-8d0c-e890fb625fdb": {
            displayValue?: string;
            units?: string;
            type?: string;
        };
        "67ac1d0c-31b0-4392-a5bb-b8500ffdf0b9": unknown;
        "d46d6259-6866-4839-86ab-c5a854649f0b": {
            ex?: string;
            /** Format: date-time */
            time?: string;
            type?: string;
            /** Format: int32 */
            idx?: number;
        };
        "40bb4ac7-07bc-4f76-9b7e-533d8c3c1ff5": {
            scope?: string;
            attr?: string;
            previousValue?: string;
            currentValue?: string;
        };
        "9b4c07d5-5dc6-4b56-ab56-cd39c0ac5305": {
            /** @description (typeName=java.util.List<java.lang.String>) */
            addressprefixlist?: components["schemas"]["b81b07ae-b6cc-4d9c-afad-99891c9bdb92"];
            address?: string;
            method?: string;
            /** Format: int32 */
            prefix?: number;
            /** @description (typeName=java.util.List<java.lang.String>) */
            dnslist?: components["schemas"]["b81b07ae-b6cc-4d9c-afad-99891c9bdb92"];
            gateway?: string;
        };
        "2f300e9b-ab72-4436-b8d0-289bcc818d35": components["schemas"]["c83b62a3-6900-4f34-a411-15cae0653b2f"][];
        "c602d3e4-da9b-4274-b4f9-e42abafece7d": components["schemas"]["bc2d39d1-a577-4ccc-b791-486e548852e5"][];
        "6c9ab5b4-c9fd-4f35-880f-e92a5dea15ef": {
            clientAddr?: string;
            /** Format: int64 */
            outChars?: number;
            nodeAddr?: string;
            id?: string;
            /** Format: int64 */
            inChars?: number;
            nodeId?: string;
        };
        "5c667367-d0e8-44b1-ade2-f42bb0a29d3d": {
            /** @description (typeName=com.tccc.kos.commons.util.MultiValueMap<java.lang.String, com.tccc.kos.core.service.manifest.NodeSoftwareInfo>) */
            nodes?: components["schemas"]["a560ce43-cf12-49c5-8014-59d09f7501bf"];
        };
        "f0cb4dde-a0a0-46c7-89fa-d2c34cc647ec": components["schemas"]["fd0d0530-91c7-441f-98b3-f1d7a04cec89"][];
        "3100e38a-427d-4397-b536-d8aa34f8a8fd": {
            type?: string;
        };
        "399429fd-2817-4f96-9a4a-af39d6e37c45": {
            path?: string;
            name?: string;
        };
        "f448ddd6-2c67-4f84-91a7-eb435345b476": {
            reason?: string;
            /** Format: date-time */
            createTime?: string;
            resolvable?: boolean;
            /** @description (typeName=java.util.Set<java.lang.String>) */
            ifaces?: components["schemas"]["8ba94aeb-e69d-4024-8bd9-5bdfc9f81a53"];
            /** Format: int32 */
            id?: number;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["2a364eec-8033-4af0-84c2-9cca6b59353c"];
            type?: string;
            /** @description (typeName=java.util.Set<java.lang.String>) */
            tags?: components["schemas"]["8ba94aeb-e69d-4024-8bd9-5bdfc9f81a53"];
            /** @description (typeName=com.tccc.kos.commons.core.service.trouble.TroubleInfo) */
            info?: components["schemas"]["58acfac8-c237-43e2-9883-4392ebb86940"];
            group?: string;
        };
        "fe79a842-ecf0-4df3-ba9a-a9dee3aec14e": {
            /** @description (typeName=java.util.List<com.tccc.kos.ext.freestyle.service.brandset.regulatory.NutritionVolume>) */
            volumes?: components["schemas"]["f0cb4dde-a0a0-46c7-89fa-d2c34cc647ec"];
            error?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            labels?: components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
        };
        "b78ca01a-72ff-4329-acc4-b3e855a96ae0": unknown;
        "00bbd3ce-f0ee-493c-ac97-cc712ce100f4": {
            /** Format: int64 */
            runStartTime?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.commons.util.concurrent.future.trace.FutureTrace>) */
            children?: components["schemas"]["744e64ce-b879-43b4-a180-36f30f098ea9"];
            /** Format: int64 */
            createTime?: number;
            /** Format: int64 */
            runEndTime?: number;
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureState) */
            endState?: components["schemas"]["570b2b57-303c-481e-a58f-de7255aef8be"];
            name?: string;
            /** Format: int32 */
            id?: number;
            /** Format: int64 */
            endTime?: number;
            /** Format: int32 */
            parentId?: number;
        };
        "98ad8616-5af8-4bb3-9064-0aef591304f9": components["schemas"]["5af5339b-ecfa-4e46-985e-1a94ef174a5a"][];
        "bd46e3d4-c257-4a6a-81a7-34a34f0a19eb": unknown;
        "2d93b0d4-292a-464d-978e-e13416546a32": unknown;
        /** @description (typeName=com.tccc.kos.ddk.service.network.NetworkTestReport) */
        "4d26f902-361c-42a0-b9ea-911a1b7e6d87": components["schemas"]["166d44a1-4f73-4edd-a67a-828f5505052d"];
        "070f31fc-d099-4c21-9450-b6daa86cf30c": {
            valid?: boolean;
            value?: string;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "0ecafeb4-7898-4565-983e-e6338037f3f7": components["schemas"]["6899647f-0951-49ea-b636-841bfc40e4e3"][];
        "a3fbc5e7-d11d-40fc-a29c-7276d4b02031": {
            id?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.util.units.Unit>) */
            units?: components["schemas"]["3648f830-9262-44b8-b677-e8dabb267b15"];
        };
        "79aee426-ad29-402a-b1ac-f69b161bb184": {
            identifier?: string;
            /** Format: int64 */
            size?: number;
            miniHash?: string;
            name?: string;
            version?: string;
            hash?: string;
        };
        "762c7791-9849-440d-abd6-895060dc87c3": {
            /** Format: int64 */
            lastChangedTimeMono?: number;
            /** Format: double */
            totalVolume?: number;
            internal?: boolean;
            /** Format: int64 */
            creationTimeMS?: number;
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            ingredientIds?: components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
            /** Format: date-time */
            creationDate?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byIngredients?: components["schemas"]["4d5343a8-e8db-4bc3-a556-46004800db21"];
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byPumps?: components["schemas"]["4d5343a8-e8db-4bc3-a556-46004800db21"];
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            pumpPaths?: components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
            removed?: boolean;
            name?: string;
            /** Format: int64 */
            lastChangedTimeMS?: number;
            locked?: boolean;
        };
        "19873ca4-2a0e-4f46-b793-db475d198a0e": unknown;
        "c8398622-ac1d-406a-8f1e-63c92abd5172": components["schemas"]["37ace051-567d-477a-946a-8d7bd9e68d89"][];
        "d5e6b98d-fee4-4256-b60d-46f5a12b759e": components["schemas"]["8795fbaf-2ffe-4b67-babf-f38d733b5e03"][];
        "8795fbaf-2ffe-4b67-babf-f38d733b5e03": {
            id?: string;
            /** @description (typeName=com.tccc.kos.core.service.udev.storage.StorageInfo) */
            info?: components["schemas"]["3d8c963b-b751-460c-9235-b0cf596d42ed"];
        };
        "56889214-2228-45a5-9ff9-d5ae391240d6": {
            ingredientId?: string;
            holderPath?: string;
            /** Format: int64 */
            createTime?: number;
            factoryJson?: string;
            containerId?: string;
            error?: string;
        };
        "0b96307a-98a1-4e6d-876c-0fc688e207cb": components["schemas"]["a36a96f2-c0c7-4a40-a730-c796eecd504e"][];
        "a560ce43-cf12-49c5-8014-59d09f7501bf": {
            empty?: boolean;
        };
        "6cdbca28-fc6a-462b-8ca5-b9594a9fa99f": {
            preStep?: boolean;
            name?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.Object>) */
            options?: components["schemas"]["13f43ab1-b5a3-4819-9c0d-dd1ff32e364c"];
            exclusive?: boolean;
            complete?: boolean;
        };
        "1e5dffd2-469e-4e35-b5db-389520ba99b8": components["schemas"]["5c54f311-29eb-4e3e-9296-7ff8efd0cc35"][];
        "2543fbff-ca64-4be3-93e7-f103191aed07": components["schemas"]["544a98cc-5acd-457d-9adb-31dc31ad1d3c"][];
        "897458fb-af2a-4d15-bff6-adac61dba407": unknown;
        "c9826fe3-1f63-47e0-b100-a9239cd578cd": {
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.localization.LocalizationContext$CtxLocaleInfo>) */
            locales?: components["schemas"]["8200c75c-9543-4858-84fe-41f752a50274"];
        };
        "afab38b7-7a3a-4e4d-93ee-2e5b33c1090f": {
            /** Format: double */
            totalVolume?: number;
            internal?: boolean;
            /** Format: int64 */
            creationTimeMS?: number;
            name?: string;
            /** Format: int64 */
            lastChangedTimeMS?: number;
            /** Format: date-time */
            creationDate?: string;
            locked?: boolean;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byIngredients?: components["schemas"]["11d116a8-45e5-48fa-bc37-1319e08c12e9"];
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byPumps?: components["schemas"]["11d116a8-45e5-48fa-bc37-1319e08c12e9"];
        };
        "cea2eca7-59ab-4a18-995a-86b66525b0e2": components["schemas"]["ef8b07c1-b2b0-4864-a445-41264a736d60"][];
        "89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53": {
            reason?: string;
            note?: string;
            /** @description (typeName=com.tccc.kos.commons.util.ReasonData) */
            reasonData?: components["schemas"]["0d7abbb2-673d-402c-aea9-11dd54b7d9fd"];
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureWork) */
            rootFuture?: components["schemas"]["89cf5adf-bccd-4eb8-82a3-24a1cf1a6d53"];
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureState) */
            endState?: components["schemas"]["570b2b57-303c-481e-a58f-de7255aef8be"];
            tracker?: string;
            /** Format: int64 */
            remainingTimeMs?: number;
            name?: string;
            /** Format: int32 */
            progress?: number;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            abortAbandonedTimeoutMs?: number;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["1c000dfe-beb7-43bb-bd37-e3a211351676"];
        };
        "d95dbac5-5f38-483c-ba1e-7bf913f78d29": string[];
        "14aace1e-69a6-4332-b0ad-421b1bd90886": unknown;
        "d7b1562d-a61e-45a6-aff6-e84a704cf6cb": {
            parent?: string;
            /** @description (typeName=java.io.File) */
            parentFile?: components["schemas"]["d7b1562d-a61e-45a6-aff6-e84a704cf6cb"];
            hidden?: boolean;
            /** Format: int64 */
            freeSpace?: number;
            /** Format: int64 */
            totalSpace?: number;
            /** Format: int64 */
            usableSpace?: number;
            /** @description (typeName=java.io.File) */
            canonicalFile?: components["schemas"]["d7b1562d-a61e-45a6-aff6-e84a704cf6cb"];
            directory?: boolean;
            path?: string;
            /** @description (typeName=java.io.File) */
            absoluteFile?: components["schemas"]["d7b1562d-a61e-45a6-aff6-e84a704cf6cb"];
            file?: boolean;
            absolute?: boolean;
            name?: string;
            canonicalPath?: string;
            absolutePath?: string;
        };
        "b409a589-507a-4790-9739-c1e878704032": {
            /** @description (typeName=java.util.List<com.tccc.kos.core.primary.service.update.UpdateInfo$Note>) */
            notes?: components["schemas"]["cea2eca7-59ab-4a18-995a-86b66525b0e2"];
            blocked?: boolean;
            /** Format: int64 */
            createTime?: number;
            active?: boolean;
            manifestId?: string;
            deviceId?: string;
        };
        "a1310ef7-88c8-47d2-94b8-3734170a7028": {
            /** @description (typeName=com.tccc.kos.commons.util.ListenerList<com.tccc.kos.commons.core.service.config.ConfigBeanListener>) */
            listeners?: components["schemas"]["2991f30c-01c1-4912-b2f5-36e2654b2d76"];
        };
        "4dd8c4a1-6ba2-4206-acf5-9d92d37babc1": {
            identifier?: string;
            /** Format: int64 */
            size?: number;
            miniHash?: string;
            hash?: string;
        };
        "c3234a16-40dc-4272-83cc-28fdcdb58407": {
            path?: string;
            basePath?: string;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.cms.service.screen.Screen>) */
            screens?: components["schemas"]["f7ec87b1-3636-4982-b7f7-607586fe83ac"];
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            details?: components["schemas"]["1c000dfe-beb7-43bb-bd37-e3a211351676"];
            type?: string;
        };
        /** @description (typeName=java.util.Collection<? extends com.tccc.kos.ext.dispense.service.ingredient.BaseIngredient>) */
        "4b872d39-9054-43ea-94d9-9020fe1d852f": components["schemas"]["5e27df19-c54b-43e0-a5e2-55defb863e09"];
        "d9f8152c-0cb3-497f-ae75-beddd8350fb9": {
            /** Format: int32 */
            tagVersion?: number;
            /** Format: double */
            fuelGauge?: number;
            /** Format: int32 */
            width?: number;
            /** Format: int64 */
            id?: number;
            /** Format: int32 */
            plantCode?: number;
            uin?: string;
            /** Format: date-time */
            piercedDate?: string;
            enjoyByDateStr?: string;
            /** Format: int32 */
            cartridgeNum?: number;
        };
        "ae07d191-7642-4136-b5f9-801e933e65ef": components["schemas"]["12ebc740-77b7-455e-91eb-7c701d3dcca0"][];
        /** @description (typeName=com.tccc.kos.commons.core.service.config.MethodPair$MethodSchema) */
        "d4c83f0a-3c37-49eb-902f-da0ebb22a2a5": components["schemas"]["7d23d647-1996-4c8d-bcaa-926098b1fab4"];
        "2b1d9376-c63d-40cc-8d8d-a1f5a84f51db": components["schemas"]["f448ddd6-2c67-4f84-91a7-eb435345b476"][];
        "1b352974-e082-43a8-a951-b3c0a066a032": {
            type?: string;
            /** @description (typeName=com.tccc.kos.commons.manifest.chained.ChainedManifest) */
            chainedManifest?: components["schemas"]["dba8a420-fe44-421f-b64d-c6e2c39abd85"];
            /** @description (typeName=com.tccc.kos.commons.kab.KabFile) */
            kab?: components["schemas"]["31d1bf07-da45-4b21-b2ab-af486fcca2d1"];
        };
        "29218194-d080-40e1-bf77-04b9b11f4455": {
            browserName?: string;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["8edac764-40c3-438a-9a3b-08f1c7998e17"];
        };
        "fd0d0530-91c7-441f-98b3-f1d7a04cec89": {
            /** Format: double */
            volume?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.freestyle.service.brandset.regulatory.NutritionVolume$RoundedValue>) */
            values?: components["schemas"]["fa77a8c2-7ec1-4d88-8bfa-d9f1caa04063"];
        };
        "892a751c-ec19-40b4-9a10-aace56663981": {
            /** @description (typeName=java.util.List<java.lang.String>) */
            scopeNames?: components["schemas"]["b81b07ae-b6cc-4d9c-afad-99891c9bdb92"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.ConfigDetails>) */
            details?: components["schemas"]["0e61b94a-9e45-434a-be1a-4bb35edeb968"];
        };
        "fe888288-e811-49ce-b642-3609c0e920b0": components["schemas"]["00bbd3ce-f0ee-493c-ac97-cc712ce100f4"][];
        "0f3fa624-6d7a-487f-8cd3-50822d8aab56": {
            /** @description (typeName=java.util.List<com.tccc.kos.ext.freestyle.service.micro.calibration.MicroCalibrationReport$PumpReport>) */
            pumps?: components["schemas"]["cf160cc5-cdf0-4c39-ad65-1c7751ff9224"];
            boardPath?: string;
        };
        "329eb0f9-e04e-4461-ab44-dd4111dda062": {
            val?: string;
            reason?: string;
            attr?: string;
        };
        "d4abd788-6e05-4647-9a88-e99f20a9baa4": {
            integralNumber?: boolean;
            double?: boolean;
            valueNode?: boolean;
            floatingPointNumber?: boolean;
            bigInteger?: boolean;
            float?: boolean;
            /** @description (typeName=com.fasterxml.jackson.databind.node.JsonNodeType) */
            nodeType?: components["schemas"]["faa4b7ba-29af-4f30-beb3-b11bf5ccaec6"];
            int?: boolean;
            long?: boolean;
            textual?: boolean;
            empty?: boolean;
            missingNode?: boolean;
            pojo?: boolean;
            number?: boolean;
            boolean?: boolean;
            null?: boolean;
            array?: boolean;
            binary?: boolean;
            containerNode?: boolean;
            short?: boolean;
            bigDecimal?: boolean;
            object?: boolean;
        };
        "107e3a36-8dd6-4ae3-b035-b2f3b8a54255": string[];
        "5af5339b-ecfa-4e46-985e-1a94ef174a5a": {
            configured?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.EthernetDetails) */
            ethernet?: components["schemas"]["488e7920-a3f8-4af1-bddc-f69450d5e2e2"];
            /** @description (typeName=com.tccc.kos.core.service.network.beans.WifiDetails) */
            wifi?: components["schemas"]["afed09c7-a0ef-478b-9bfe-2e0888dac857"];
            hwaddress?: string;
            name?: string;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.Ip4Settings) */
            ip4settings?: components["schemas"]["9b4c07d5-5dc6-4b56-ab56-cd39c0ac5305"];
            type?: string;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.NetworkInterfaceCategory) */
            category?: components["schemas"]["1db0452e-9b99-4a2a-be4c-9bb9276015f9"];
            /** Format: int32 */
            nmdevicestate?: number;
            /** Format: int32 */
            mtu?: number;
        };
        "abe2eeed-cba3-43db-a83b-381b8a32414c": components["schemas"]["d46d6259-6866-4839-86ab-c5a854649f0b"][];
        "15ca5dc2-554a-48cc-8875-5c0644a90526": {
            password?: string;
            user?: string;
        };
        "d050536c-4774-44a5-b7c3-effd73bcac63": {
            path?: string;
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            locales?: components["schemas"]["57eade3e-60b5-4717-bf35-7a733005b49c"];
            basePath?: string;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            details?: components["schemas"]["1c000dfe-beb7-43bb-bd37-e3a211351676"];
            type?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.localization.LocalizationContext$CtxNamespace>) */
            namespaces?: components["schemas"]["7a15f223-382d-450d-a5c5-1b65d03d4eda"];
        };
        "e2511c2e-b9be-436b-9b38-21a263391238": components["schemas"]["07a793c0-d422-4ddf-a1b6-4688c3a4bd53"][];
        "cfcc5834-c9d4-48b2-b3a4-d776f59eac3d": components["schemas"]["bd46e3d4-c257-4a6a-81a7-34a34f0a19eb"][];
        "c1cf08cd-d8f8-4080-87e8-79fdb53c58e4": {
            /** Format: int32 */
            sec?: number;
            /** Format: int32 */
            min?: number;
            /** Format: int32 */
            hour?: number;
        };
        "1228d949-8cd9-4120-a2e7-354524950553": {
            redirect?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            browserId?: components["schemas"]["29218194-d080-40e1-bf77-04b9b11f4455"];
            url?: string;
        };
        "87c969aa-fd72-47e9-871e-3fb5474db37c": components["schemas"]["f17e7079-b642-4c1a-a195-fd8d9575a552"][];
        "4d4400db-9953-45ee-b0aa-64f7d8cb2153": {
            /** Format: double */
            initGauge?: number;
            /** Format: int32 */
            slicePos?: number;
            /** Format: int64 */
            createTime?: number;
            /** Format: double */
            softGauge?: number;
            containerId?: string;
            /** Format: double */
            maxGauge?: number;
            /** Format: double */
            hardGauge?: number;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "8ba94aeb-e69d-4024-8bd9-5bdfc9f81a53": string[];
        "3ee9f32c-4e58-4b9e-9075-ea33ea519f24": components["schemas"]["e2d381de-add9-4c2c-95d4-d75085c8462a"][];
        "b00871f2-36d7-4708-aa01-70a6faadd00b": {
            redirect?: boolean;
            url?: string;
        };
        "2fda101c-3403-4f21-9529-74140838ba19": {
            sourceId?: string;
            name?: string;
            id?: string;
            type?: string;
        };
        "e1d43445-a860-41c5-adc2-7838a3daa813": {
            /** @description (typeName=com.tccc.kos.commons.manifest.ManifestArtifact) */
            artifact?: components["schemas"]["4dd8c4a1-6ba2-4206-acf5-9d92d37babc1"];
            identifier?: string;
            incomplete?: boolean;
            /** @description (typeName=com.tccc.kos.commons.kab.KabFile) */
            kab?: components["schemas"]["31d1bf07-da45-4b21-b2ab-af486fcca2d1"];
        };
        "112c87e0-7591-4b43-a59e-0ae719238afe": unknown;
        "18935bae-7c80-4d5d-b515-f2a4bfdd785b": {
            /** Format: int32 */
            rxPackets?: number;
            /** Format: int32 */
            txErrors?: number;
            /** Format: int64 */
            rxBytes?: number;
            /** Format: int64 */
            txBytes?: number;
            /** Format: int32 */
            txPackets?: number;
            /** Format: int32 */
            txDropped?: number;
            /** Format: int32 */
            rxErrors?: number;
            /** Format: int32 */
            rxDropped?: number;
            /** Format: int32 */
            rxOverErrors?: number;
        };
        "4c8f0e1c-0e21-4734-a8f5-3b5286ac30f8": string[];
        "7b4b8b40-a48d-45d5-ab4f-ee7d5c314b7c": {
            tracker?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.service.config.BeanChanges>) */
            beanChanges?: components["schemas"]["3e3b3da3-ce84-4ae5-92fe-9309651fd6de"];
        };
        "1a68b807-99b7-430d-a901-3840c798aaa3": {
            downloaderActive?: boolean;
            kabId?: string;
            downloaderName?: string;
            lastErrorReason?: string;
            /** Format: int32 */
            fileNotFoundCount?: number;
            /** Format: int32 */
            errorCount?: number;
            /** Format: int32 */
            currentSize?: number;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "1db0452e-9b99-4a2a-be4c-9bb9276015f9": unknown;
        "37ace051-567d-477a-946a-8d7bd9e68d89": {
            format?: string;
            id?: string;
            order?: string;
        };
        "8d861532-7fb2-473a-b180-66ea0fc09301": unknown;
        "688afa9a-48d8-4073-a8d5-b6db3ac8b5db": components["schemas"]["9300f683-5343-4971-b8d8-8c76996d876e"][];
        "fb27daaf-18f9-4ed2-bb41-59f5ba1f292d": components["schemas"]["6cdbca28-fc6a-462b-8ca5-b9594a9fa99f"][];
        "b828df17-30f8-4283-bd9a-d145b39f956b": components["schemas"]["6c9ab5b4-c9fd-4f35-880f-e92a5dea15ef"][];
        "31a3b1ed-34d3-48c9-9296-d83ba11fdd51": components["schemas"]["dab24b8f-32e2-4dab-80d7-3d47d19675c1"][];
        "7b37d9bb-a1c5-46ba-80a6-9fa77436b4e0": components["schemas"]["2d93b0d4-292a-464d-978e-e13416546a32"][];
        "37b69b7a-d500-44ef-9102-3cd004075f66": unknown;
        "ee9d9436-8aec-4f1c-a1b2-1b07c5d19bc6": components["schemas"]["5abb23db-db07-45ee-96a8-c38c20b709ee"][];
        /** Format: double */
        "08b20c38-cdbb-4d01-ad22-e956bfdb8423": number;
        "13bd7298-2d35-44d3-8fa3-94c54bd2ec06": components["schemas"]["1a68b807-99b7-430d-a901-3840c798aaa3"][];
        "e8d68f31-0539-4762-bca3-42621db472f1": {
            manifestId?: string;
            deviceId?: string;
        };
        "57eade3e-60b5-4717-bf35-7a733005b49c": string[];
        "cdda55a6-1440-4d0f-8252-cfe2be294d8f": components["schemas"]["4dd8c4a1-6ba2-4206-acf5-9d92d37babc1"][];
        "f189044a-66a9-44f8-bc94-e4e4a7d14e19": {
            /** @description (typeName=byte[]) */
            criticalData?: components["schemas"]["277230af-6f92-4316-9d92-3552b609ef35"];
            /** Format: double */
            sourceWeight?: number;
            /** Format: int32 */
            sourceMaxLength?: number;
            criticalDataReady?: boolean;
        };
        "530c4926-3362-4700-97f4-8990e5868fbd": components["schemas"]["40bb4ac7-07bc-4f76-9b7e-533d8c3c1ff5"][];
        "ef8b07c1-b2b0-4864-a445-41264a736d60": {
            summary?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            details?: components["schemas"]["b81b07ae-b6cc-4d9c-afad-99891c9bdb92"];
        };
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext$CtxLocaleInfo) */
        "8200c75c-9543-4858-84fe-41f752a50274": components["schemas"]["3f79f05d-dd98-4716-8a9b-e3ab59584567"];
        "12ebc740-77b7-455e-91eb-7c701d3dcca0": {
            /** @description (typeName=com.tccc.kos.commons.util.ListenerList<com.tccc.kos.core.service.udev.storage.StorageMountListener>) */
            listeners?: components["schemas"]["7b37d9bb-a1c5-46ba-80a6-9fa77436b4e0"];
            removed?: boolean;
            vendor?: string;
            /** @description (typeName=java.io.File) */
            mountDir?: components["schemas"]["d7b1562d-a61e-45a6-aff6-e84a704cf6cb"];
            model?: string;
            label?: string;
            id?: string;
            /** Format: int64 */
            runTimeMs?: number;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["8edac764-40c3-438a-9a3b-08f1c7998e17"];
            syspath?: string;
            /** @description (typeName=com.tccc.kos.core.service.udev.storage.StorageInfo) */
            storageInfo?: components["schemas"]["3d8c963b-b751-460c-9235-b0cf596d42ed"];
            local?: boolean;
        };
        /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ddk.service.network.NetworkTestReport>) */
        "0ccb9c34-bfa1-4ad8-85ae-0c9722369832": components["schemas"]["4d26f902-361c-42a0-b9ea-911a1b7e6d87"];
        "5ce11f84-1776-42a9-8c57-1d4532a1d101": {
            nodeName?: string;
            optional?: boolean;
            nodeType?: string;
            primary?: boolean;
        };
        "570b2b57-303c-481e-a58f-de7255aef8be": {
            cancel?: boolean;
            fail?: boolean;
            abort?: boolean;
            success?: boolean;
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureEvent) */
            futureEvent?: components["schemas"]["37b69b7a-d500-44ef-9102-3cd004075f66"];
            terminate?: boolean;
            done?: boolean;
        };
        "a36a96f2-c0c7-4a40-a730-c796eecd504e": {
            apiUrl?: string;
            basePath?: string;
            name?: string;
        };
        "be6fcf70-acfd-4b8a-b36a-c09788327575": components["schemas"]["7c99bc60-213c-4a89-891e-6f1c01c15a75"][];
        "c1a211c9-1335-4393-a436-12d4a890385f": components["schemas"]["1d31c37b-0d8a-411c-9d6a-4b54f959d024"][];
        "9300f683-5343-4971-b8d8-8c76996d876e": {
            note?: string;
            visible?: boolean;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.dispense.pipeline.beverage.graph.GraphNode>) */
            children?: components["schemas"]["688afa9a-48d8-4073-a8d5-b6db3ac8b5db"];
            available?: boolean;
            id?: string;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["897458fb-af2a-4d15-bff6-adac61dba407"];
            type?: string;
            /** Format: int32 */
            version?: number;
        };
        "07f070ba-f810-464e-ab3e-5f8cfb0e4521": {
            /** Format: double */
            volume?: number;
        };
        "5abb23db-db07-45ee-96a8-c38c20b709ee": {
            baseUrl?: string;
            appId?: string;
            /** @description (typeName=com.fasterxml.jackson.databind.JsonNode) */
            descriptor?: components["schemas"]["d4abd788-6e05-4647-9a88-e99f20a9baa4"];
            id?: string;
            enabled?: boolean;
        };
        "13f43ab1-b5a3-4819-9c0d-dd1ff32e364c": Record<string, never>;
        "488e7920-a3f8-4af1-bddc-f69450d5e2e2": {
            carrier?: boolean;
            duplex?: string;
            /** Format: int32 */
            speed?: number;
        };
        "0d7abbb2-673d-402c-aea9-11dd54b7d9fd": {
            /** @description (typeName=java.lang.Class<?>) */
            view?: components["schemas"]["8fa3924e-3b29-467a-bd40-d898ee08d075"];
            data?: Record<string, never>;
        };
        "8fa3924e-3b29-467a-bd40-d898ee08d075": unknown;
        "97054104-2d17-48d7-a6f2-876307319c1b": unknown;
        "91cd7171-d74f-413b-a866-8fc82eb14eb7": {
            kmfJson?: string;
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            layers?: components["schemas"]["6838ab0b-64f5-479e-8603-d150ec7ebae2"];
            kosVersion?: string;
            nodeType?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["fa172e91-5b04-4cdf-af3e-227f11e1e52f"];
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestSection>) */
            sections?: components["schemas"]["87c969aa-fd72-47e9-871e-3fb5474db37c"];
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            artifacts?: components["schemas"]["6838ab0b-64f5-479e-8603-d150ec7ebae2"];
        };
        "e2d381de-add9-4c2c-95d4-d75085c8462a": {
            ampm?: boolean;
            format?: string;
            id?: string;
        };
        /** Format: float */
        "c07b668d-aea2-4b24-8935-5081afa560c5": number;
        "10490660-7454-4d49-9290-6a061353739d": {
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.device.ManifestNodeInfo>) */
            nodes?: components["schemas"]["0037df58-c96b-4c6e-929e-25e5440d115f"];
            /** @description (typeName=java.util.Set<java.lang.String>) */
            nodeTypes?: components["schemas"]["107e3a36-8dd6-4ae3-b035-b2f3b8a54255"];
        };
        "b9c80dd9-b3c0-4ec1-b4e2-3f513d0e8a43": components["schemas"]["1b352974-e082-43a8-a951-b3c0a066a032"][];
        "b8cebb14-ebf8-42bc-bd85-e94728ced2c6": components["schemas"]["a3fbc5e7-d11d-40fc-a29c-7276d4b02031"][];
        "744e64ce-b879-43b4-a180-36f30f098ea9": components["schemas"]["00bbd3ce-f0ee-493c-ac97-cc712ce100f4"][];
        "99169888-f02c-4745-98db-2111e43d6615": {
            /** Format: int32 */
            month?: number;
            /** Format: int32 */
            year?: number;
            /** Format: int32 */
            day?: number;
        };
        "4a4ac33c-0a5f-44f6-9e91-14c3f6d19daf": components["schemas"]["f189044a-66a9-44f8-bc94-e4e4a7d14e19"][];
        "5c530aff-a6d8-476c-9913-8f4840caf8fa": components["schemas"]["3f1aeb05-9e44-4867-a662-a28011c35aea"][];
        "88e5aed6-e3e4-4f35-9d8f-5f3645c833fd": components["schemas"]["a3128520-98e3-4ea5-b7bb-6c9551eea7dd"][];
        "a8f94084-9529-42a6-b006-c1010c8e59d4": {
            visible?: boolean;
            /** @description (typeName=com.tccc.kos.ext.freestyle.service.fuelgauge.FuelGaugeData) */
            data?: components["schemas"]["4d4400db-9953-45ee-b0aa-64f7d8cb2153"];
        };
        "277230af-6f92-4316-9d92-3552b609ef35": unknown;
        "6899647f-0951-49ea-b636-841bfc40e4e3": {
            /** Format: int32 */
            slicePos?: number;
            /** Format: int64 */
            createTime?: number;
            containerId?: string;
            /** Format: int32 */
            soldOutCount?: number;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "86fe43fb-8924-470e-ad54-477ad16faf41": unknown;
        "d9a451d6-0449-412f-affa-0feb54919041": {
            /** @description (typeName=com.tccc.kos.ext.freestyle.hardware.can.canbus.CANStats$LinkStats) */
            linkStats?: components["schemas"]["18935bae-7c80-4d5d-b515-f2a4bfdd785b"];
            /** @description (typeName=com.tccc.kos.ext.freestyle.hardware.can.canbus.CANStats$DeviceStats) */
            deviceStats?: components["schemas"]["40e73dd1-fe6d-4092-bf18-c38f47ac5cf4"];
            /** Format: int32 */
            state?: number;
            /** Format: int32 */
            txError?: number;
            /** Format: int32 */
            rxError?: number;
        };
        /** Format: int64 */
        "815eadb4-c076-4b0a-9bcd-ab3c0e4a32b0": number;
        "dab24b8f-32e2-4dab-80d7-3d47d19675c1": {
            name?: string;
            id?: string;
            group?: string;
        };
        "ad465c99-94c3-41ba-8669-c2825950db66": components["schemas"]["ce91f163-d770-448e-ad51-4e49c3493700"][];
        "063e455b-7274-44f2-b142-2e7e8a3cdc8e": components["schemas"]["329eb0f9-e04e-4461-ab44-dd4111dda062"][];
        "a9b753b3-3891-45a1-a41c-c5e91966550c": {
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            childrenIds?: components["schemas"]["4c8f0e1c-0e21-4734-a8f5-3b5286ac30f8"];
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            parentIds?: components["schemas"]["4c8f0e1c-0e21-4734-a8f5-3b5286ac30f8"];
            altId?: string;
        };
        "4acae015-5495-4db3-92f6-557525f055c7": components["schemas"]["f448ddd6-2c67-4f84-91a7-eb435345b476"][];
        "4641b329-0f71-4c58-bc76-62ab03196449": string;
        "31059e05-b5e6-43b7-a38b-42654933050c": components["schemas"]["a9b753b3-3891-45a1-a41c-c5e91966550c"][];
        /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics>) */
        "52677c14-b74b-486f-b143-48704fada009": components["schemas"]["e716c9a1-228f-4903-baa5-18e5dbadf5f7"];
        "0e61b94a-9e45-434a-be1a-4bb35edeb968": components["schemas"]["01f1c838-e62b-451d-b6b9-610b360ea6ff"][];
        "700571fa-678b-435c-bc9c-1a5b431deb28": {
            rebuild?: boolean;
            /** @description (typeName=com.tccc.kos.commons.util.MultiValueMap<java.lang.String, com.tccc.kos.ext.dispense.pipeline.beverage.graph.Availability>) */
            groups?: components["schemas"]["0e52d0e4-a584-4741-bbb2-265b250f5791"];
        };
        "21b4ef3c-e858-4693-9788-838bda6e324a": {
            serialNumber?: string;
            name?: string;
            nodeId?: string;
        };
        "7c99bc60-213c-4a89-891e-6f1c01c15a75": {
            /** Format: int64 */
            insertTime?: number;
            /** @description (typeName=com.tccc.kos.ext.freestyle.hardware.rfid.freestyle.FreestyleRfidTag) */
            rfidTag?: components["schemas"]["d9f8152c-0cb3-497f-ae75-beddd8350fb9"];
            id?: string;
            /** @description (typeName=java.lang.String[]) */
            ingredientIds?: components["schemas"]["19873ca4-2a0e-4f46-b793-db475d198a0e"];
            locked?: boolean;
            intrinsic?: boolean;
            soldOut?: boolean;
            /** Format: date-time */
            piercedDate?: string;
            mark?: string;
        };
        "40e73dd1-fe6d-4092-bf18-c38f47ac5cf4": {
            /** Format: int32 */
            arbitrationLost?: number;
            /** Format: int32 */
            busError?: number;
            /** Format: int32 */
            errorWarning?: number;
            /** Format: int32 */
            errorPassive?: number;
            /** Format: int32 */
            restarts?: number;
            /** Format: int32 */
            busOff?: number;
        };
        "0037df58-c96b-4c6e-929e-25e5440d115f": components["schemas"]["5ce11f84-1776-42a9-8c57-1d4532a1d101"][];
        "7d23d647-1996-4c8d-bcaa-926098b1fab4": {
            /** @description (typeName=java.lang.Object[]) */
            values?: components["schemas"]["97054104-2d17-48d7-a6f2-876307319c1b"];
            /** @description (typeName=java.lang.Class<? extends com.tccc.kos.commons.core.service.config.options.ConfigOptions>) */
            optionsClass?: components["schemas"]["b78ca01a-72ff-4329-acc4-b3e855a96ae0"];
            format?: string;
            /** @description (typeName=com.tccc.kos.commons.core.service.config.options.ConfigOptions) */
            options?: components["schemas"]["3100e38a-427d-4397-b536-d8aa34f8a8fd"];
            type?: string;
            desc?: string;
        };
        "3f1aeb05-9e44-4867-a662-a28011c35aea": {
            note?: string;
            visible?: boolean;
            available?: boolean;
            id?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            taggedIds?: components["schemas"]["d95dbac5-5f38-483c-ba1e-7bf913f78d29"];
            altId?: string;
        };
        "8edac764-40c3-438a-9a3b-08f1c7998e17": {
            nodeName?: string;
            hostname?: string;
            id?: string;
            nodeType?: string;
        };
        "5c54f311-29eb-4e3e-9296-7ff8efd0cc35": {
            name?: string;
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedManifestArtifact>) */
            artifacts?: components["schemas"]["11e8068f-bcac-460a-a04b-6aeb3a77d682"];
        };
        /** @description (typeName=com.tccc.kos.ext.cms.service.screen.ScreenContext) */
        "56d81078-c1b8-419c-a492-8236d6fe292a": components["schemas"]["c3234a16-40dc-4272-83cc-28fdcdb58407"];
        "f38cb2ee-e407-425d-a68f-13bc585c37d7": {
            vfsPath?: string;
            endDate?: string;
            /** Format: int32 */
            videoLoops?: number;
            name?: string;
            /** Format: int32 */
            width?: number;
            screenType?: string;
            /** Format: int64 */
            buildDate?: number;
            /** Format: int32 */
            priority?: number;
            /** Format: int32 */
            imageDisplaySec?: number;
            contentType?: string;
            startDate?: string;
            /** Format: int32 */
            height?: number;
        };
        "3648f830-9262-44b8-b677-e8dabb267b15": components["schemas"]["0c902635-46c2-4583-93fb-d16272b3c214"][];
        "fa172e91-5b04-4cdf-af3e-227f11e1e52f": string;
        "6838ab0b-64f5-479e-8603-d150ec7ebae2": components["schemas"]["4dd8c4a1-6ba2-4206-acf5-9d92d37babc1"][];
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
