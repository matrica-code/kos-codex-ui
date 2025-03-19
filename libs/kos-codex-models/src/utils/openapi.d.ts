export interface paths {
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
                    "application/json": components["schemas"]["2c54f1d8-65b5-4cc9-8c69-8f7ae3eba3f7"];
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
                        "application/json": components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
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
                    "application/json": components["schemas"]["da1a9959-460e-4d2c-9739-1607c48ae0ca"];
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
                        "application/json": components["schemas"]["94b835ba-2a43-42da-b5d1-6424b16aa79b"];
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
                        "application/json": components["schemas"]["4ad4ab85-2a7c-49b5-8a9c-c42926a137ed"];
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
                        "application/json": components["schemas"]["3039022e-41cf-4042-b947-44d3e89194bb"];
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
                        "application/json": components["schemas"]["e90ced47-834a-4d27-8ef9-8d76e568c29d"];
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
                        "application/json": components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
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
                        "application/json": components["schemas"]["0d9d3d80-dcd2-49b2-92c3-a474e202b923"];
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
                        "application/json": components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
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
                        "application/json": components["schemas"]["0d9d3d80-dcd2-49b2-92c3-a474e202b923"];
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
                        "application/json": components["schemas"]["3e3f2542-c01c-4bbe-9a49-6e205d507848"];
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
                        "application/json": components["schemas"]["2834d648-da1d-435c-a030-b9ac198f6664"];
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
    "/api/kos/logs/rotateAll": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Rotate all log streams on all nodes. (v1.0) */
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
    "/api/kos/logs/node/{nodeId}/streams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the list of log streams on the specified node. (v1.0) */
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
                        "application/json": components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
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
    "/api/kos/logs/node/{nodeId}/{stream}/subscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Subscribe to the specified stream. This enables real-time log events for the stream. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description Stream to subscribe to. */
                    stream: string;
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
    "/api/kos/logs/node/{nodeId}/{stream}/unsubscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unsubscribe to the specified stream. This disables real-time log events for the stream. (v1.0) */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description Stream to unsubscribe from. */
                    stream: string;
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
    "/api/kos/logs/node/{nodeId}/{stream}/blocks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return block meta data for the specified stream. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description Stream to fetch block data from. */
                    stream: string;
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
                        "application/json": components["schemas"]["fc6cef05-1b3c-4f41-9968-f1678d25d3a1"];
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
    "/api/kos/logs/node/{nodeId}/{stream}/blocks/{blockId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Return the log data for the specified block. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Id of the node to operate on. */
                    nodeId: string;
                    /** @description Stream to fetch block data from. */
                    stream: string;
                    /** @description Block to return. */
                    blockId: number;
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
                        "application/json": components["schemas"]["e24271cf-84ad-4ef3-97bf-985f3d0acee0"];
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
    "/api/kos/logs/rotate/{stream}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Rotate the specified log stream on all nodes. (v1.0) */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Log stream to rotate */
                    stream: string;
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
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kos/logs/overrides": {
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
                        "application/json": components["schemas"]["72b9d91a-471e-4a8b-85f7-1f21fdea5f07"];
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
                    "application/json": components["schemas"]["a778470d-eacc-4b9c-ba97-bdb515bad035"];
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
                    "application/json": components["schemas"]["a778470d-eacc-4b9c-ba97-bdb515bad035"];
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
                        "application/json": components["schemas"]["0ca43859-f058-4826-a7c6-169c94d98dc5"];
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
                        "application/json": components["schemas"]["264f0908-eb0e-4bd8-88f1-b50082ea62f1"];
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
                    "application/json": components["schemas"]["264f0908-eb0e-4bd8-88f1-b50082ea62f1"];
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
                        "application/json": components["schemas"]["264f0908-eb0e-4bd8-88f1-b50082ea62f1"];
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
                    "application/json": components["schemas"]["264f0908-eb0e-4bd8-88f1-b50082ea62f1"];
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
                        "application/json": components["schemas"]["4576f34a-3e28-498f-844b-c391d7f72579"];
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
                        "application/json": components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
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
                        "application/json": components["schemas"]["f4bfd515-3ee7-4d43-888a-352cf4beff64"];
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
                        "application/json": components["schemas"]["2b42d45f-e2e1-4676-a55c-104e2fa53baa"];
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
                    "application/json": components["schemas"]["b8745dc1-0b80-4434-b500-40fa346970fd"];
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
                    "application/json": components["schemas"]["b8745dc1-0b80-4434-b500-40fa346970fd"];
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
                    "application/json": components["schemas"]["cfa26b8c-9720-4151-b2c4-f143ffbb1a45"];
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
                    "application/json": components["schemas"]["94d4fd75-99fb-465b-b720-e938b7e11377"];
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
                        "application/json": components["schemas"]["f216ef9f-757c-41bd-82fe-dd2af014f392"];
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
                        "application/json": components["schemas"]["fc792eaf-3d93-47de-955c-dc033793e736"];
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
                        "application/json": components["schemas"]["3b440e3c-f23e-41ce-9145-e7b9b92219b8"];
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
                        "application/json": components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
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
                        "application/json": components["schemas"]["8eeab183-d360-471f-a330-a9851b08a88f"];
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
                        "application/json": components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
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
                        "application/json": components["schemas"]["268d7b7a-c501-4b5a-9bbe-8b0197251145"];
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
                        "application/json": components["schemas"]["711eb5e5-5628-41ea-bb54-a99d5870a5ce"];
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
                        "application/json": components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
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
                        "application/json": components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
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
                        "application/json": components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
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
                        "application/json": components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
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
                        "application/json": components["schemas"]["a292aaca-8bc2-4f58-8cfc-c30b2bd41767"];
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
                        "application/json": components["schemas"]["bde4e8d7-6fb2-4f7c-bb67-aa59ad81a423"];
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
                        "application/json": components["schemas"]["b5ca36b3-aff5-4067-87c7-7ff7c9a76408"];
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
                        "application/json": components["schemas"]["b5628d97-9036-41d0-ab0c-cc9a155e1562"];
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
                        "application/json": components["schemas"]["cf0831d5-59d0-439d-bc36-2b05d9d17b4c"];
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
                        "application/json": components["schemas"]["a0e80cf7-b2cc-4cf3-b71d-bb2c0f488879"];
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
                        "application/json": components["schemas"]["dfbd2b96-fd79-4b2b-adca-851dd0875c1d"];
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
                        "application/json": components["schemas"]["ec228ba8-bf5a-483a-9ac4-d01ff7ccbf6e"];
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
                        "application/json": components["schemas"]["dfbd2b96-fd79-4b2b-adca-851dd0875c1d"];
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
                        "application/json": components["schemas"]["f9bcdc30-7cda-42e5-9cd9-044d96669fb3"];
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
                        "application/json": components["schemas"]["eedb6583-4428-40dd-8f24-0f906f6d554b"];
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
                        "application/json": components["schemas"]["df5e5aa9-8284-455f-92b2-2b44eb2147e0"];
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
                    volumes?: components["schemas"]["ff7de60d-2aa3-4f3c-b2b8-004defef7859"];
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
                        "application/json": components["schemas"]["57b0a0fe-6178-4461-9f77-92654af615f2"];
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
                        "application/json": components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
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
                        "application/json": components["schemas"]["2b9b9035-be53-42fc-a2b5-60990f1fd881"];
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
                        "application/json": components["schemas"]["8da2ac3c-4b7f-4479-9938-5beb7fc39469"];
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
                        "application/json": components["schemas"]["ccee6952-72cf-4ac8-a5c5-1c2ac8ac602e"];
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
    "/api/kos/logs/groups": {
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
                        "application/json": components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
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
    "/api/kos/logs/overrides/{nodeType}": {
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
                        "application/json": components["schemas"]["72b9d91a-471e-4a8b-85f7-1f21fdea5f07"];
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
    "/api/kos/logs/overrides/{nodeType}/{typePrefix}": {
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
                        "application/json": components["schemas"]["72b9d91a-471e-4a8b-85f7-1f21fdea5f07"];
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
                    volumes?: components["schemas"]["ff7de60d-2aa3-4f3c-b2b8-004defef7859"];
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
                        "application/json": components["schemas"]["57b0a0fe-6178-4461-9f77-92654af615f2"];
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
                        "application/json": components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
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
                    "application/json": components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
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
                        "application/json": components["schemas"]["8ddf57fa-ff14-4422-84eb-95cbb34b6b23"];
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
                        "application/json": components["schemas"]["8ddf57fa-ff14-4422-84eb-95cbb34b6b23"];
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
                        "application/json": components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
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
                        "application/json": components["schemas"]["0d0dd7bd-1254-4b9e-84d8-bca4e5f1f04e"];
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
                        "application/json": components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
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
                        "application/json": components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
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
                        "application/json": components["schemas"]["dd652504-38bc-470b-912a-7c776fb779ac"];
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
                        "application/json": components["schemas"]["8e657896-8319-44d8-8f89-a99169d7ef6a"];
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
                        "application/json": components["schemas"]["f455169f-a05a-4106-99a6-7a602010b76a"];
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
                        "application/json": components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
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
                        "application/json": components["schemas"]["adab7d46-5526-45c6-a6ee-d0cc228f0f23"];
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
                        "application/json": components["schemas"]["8fee6637-b2ec-473d-8ec7-8f43fc6e9996"];
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
                        "application/json": components["schemas"]["cd220e8c-9e18-459c-8bbf-3da73e817a49"];
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
                        "application/json": components["schemas"]["86bf1cb9-641f-4376-8458-39b6e84c07c7"];
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
                        "application/json": components["schemas"]["86bf1cb9-641f-4376-8458-39b6e84c07c7"];
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
                        "application/json": components["schemas"]["16f78593-8f22-4749-8591-baf9586047b5"];
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
                        "application/json": components["schemas"]["b7537e7a-2769-49cb-8d7a-a2201290fed7"];
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
                        "application/json": components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
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
                        "application/json": components["schemas"]["5b566b38-82fc-4a4f-829a-39dab1f6dc9f"];
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
                        "application/json": components["schemas"]["dfbd2b96-fd79-4b2b-adca-851dd0875c1d"];
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
                        "application/json": components["schemas"]["dfbd2b96-fd79-4b2b-adca-851dd0875c1d"];
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
                        "application/json": components["schemas"]["dfbd2b96-fd79-4b2b-adca-851dd0875c1d"];
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
                        "application/json": components["schemas"]["6ede4c82-355f-4cb6-a9af-d41e60d77bed"];
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
                        "application/json": components["schemas"]["bb2d425f-5d78-4736-9e8a-5c53aa442087"];
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
                        "application/json": components["schemas"]["f9a563f9-36c5-4167-941e-5d520fd2005e"];
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
                        "application/json": components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
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
                        "application/json": components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
                    };
                };
            };
        };
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
                        "application/json": components["schemas"]["180fc4ba-9e01-4618-994e-666fd4012092"];
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
                        "application/json": components["schemas"]["3a61787d-2b6c-4480-9b19-9d708aea3dfd"];
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
                        "application/json": components["schemas"]["ec96b360-236b-470e-835b-73e1cbcecda5"];
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
                        "application/json": components["schemas"]["bfcfcf3f-073e-4391-8b16-dbece87938e0"];
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
                    "application/json": components["schemas"]["9265eacc-abfa-491d-881c-33697c720ab3"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
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
                        "application/json": components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
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
                        "application/json": components["schemas"]["75a812eb-496e-405a-b381-2195d291bcc8"];
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
                    "application/json": components["schemas"]["767e47f0-f826-4ffe-9a8a-0a90d0620fea"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
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
                        "application/json": components["schemas"]["02996c61-7618-4aed-ae66-3a3b50300414"];
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
                        "application/json": components["schemas"]["40ecc2cd-ddd8-498f-876c-812a936b8661"];
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
                        "application/json": components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
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
                        "application/json": components["schemas"]["f44bb83f-dfe5-42c1-8c66-564bf8565616"];
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
                        "application/json": components["schemas"]["cda5f674-ce86-4e53-a2b5-5b392637bd17"];
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
                        "application/json": components["schemas"]["3f94c4b1-eb19-4fe2-a3bd-7214523b0ab2"];
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
                    "application/json": components["schemas"]["8b745610-da2f-40d7-a8c5-fb67c2cf9885"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["8b745610-da2f-40d7-a8c5-fb67c2cf9885"];
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
                        "application/json": components["schemas"]["cb24ade3-3367-4a6d-aff3-d91b9e3af7ae"];
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
                        "application/json": components["schemas"]["785e3caf-ba96-41d3-a33f-1e9dfd9fed6d"];
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
                        "application/json": components["schemas"]["5b9fcdc1-8d6b-4066-991f-d1b8d0ffc6d7"];
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
                    "application/json": components["schemas"]["583a4e62-93f6-4018-8b06-b0e29290d3c6"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["00a750ae-8201-4bd0-a1e9-c0abe056076b"];
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
                        "application/json": components["schemas"]["f50fe02a-930b-4cee-a878-ffa2430c71cd"];
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
                        "application/json": components["schemas"]["f50fe02a-930b-4cee-a878-ffa2430c71cd"];
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
                    "application/json": components["schemas"]["89804ed5-604c-4d7d-978c-1e5e24a86362"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["00a750ae-8201-4bd0-a1e9-c0abe056076b"];
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
                        "application/json": components["schemas"]["6f0ba316-4546-4f2e-ac92-3232854bacd5"];
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
                        "application/json": components["schemas"]["6f0ba316-4546-4f2e-ac92-3232854bacd5"];
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
                        "application/json": components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
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
                        "application/json": components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
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
                        "application/json": components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
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
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "b63d8948-e4cf-4fc1-8ec0-a31e17750976": {
            note?: string;
            visible?: boolean;
            available?: boolean;
            id?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            taggedIds?: components["schemas"]["3f6bd6af-8dc9-480b-960d-b46e93548879"];
            altId?: string;
        };
        "561a7756-3302-4f29-a34c-5db4b181a08c": {
            /** Format: int64 */
            runStartTime?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.commons.util.concurrent.future.trace.FutureTrace>) */
            children?: components["schemas"]["881ded41-f12d-410c-9437-f8bd526d19fc"];
            /** Format: int64 */
            createTime?: number;
            /** Format: int64 */
            runEndTime?: number;
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureState) */
            endState?: components["schemas"]["dcce1799-a458-4b40-9d13-22a262b96210"];
            name?: string;
            /** Format: int32 */
            id?: number;
            /** Format: int64 */
            endTime?: number;
            /** Format: int32 */
            parentId?: number;
        };
        "33cdf0e9-bc1e-4db7-b81f-e153177ea238": unknown;
        "ff7de60d-2aa3-4f3c-b2b8-004defef7859": components["schemas"]["0a65a2ab-3570-4b6d-9b54-70b550ce9d0f"][];
        "393cf9ed-e817-462e-9f36-1d516ada1ed2": components["schemas"]["daad0224-7aac-4ddc-bc4f-a90cc6223fd5"][];
        "6f0ba316-4546-4f2e-ac92-3232854bacd5": {
            valid?: boolean;
            value?: string;
            /** Format: int64 */
            lastUpdateTime?: number;
        };
        "b562df1e-9079-4d4e-9f6d-0b02ee44ff0f": {
            id?: string;
            /** @description (typeName=com.tccc.kos.core.service.udev.storage.StorageInfo) */
            info?: components["schemas"]["16751bf8-b93a-4427-bc25-9391b8bc0883"];
        };
        "dfbd2b96-fd79-4b2b-adca-851dd0875c1d": unknown;
        "57ee16f3-36e6-4eaf-a9bb-8d8f69c0c6f2": {
            id?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.util.units.Unit>) */
            units?: components["schemas"]["7f256d2e-d30c-4527-864d-9685bfd8a7c4"];
        };
        "26e7b8e5-e134-4ea0-99b6-538a5f7cdc9e": {
            defaultLocale?: string;
            file?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            fallbacks?: components["schemas"]["40ecc2cd-ddd8-498f-876c-812a936b8661"];
            kabId?: string;
        };
        "30bb47ff-d240-426b-be35-04974838b84c": {
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$AttrChange>) */
            scopedChanges?: components["schemas"]["05a8ca50-11ab-4ef0-bdf9-fb1b05ce5fa6"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$AttrChange>) */
            changes?: components["schemas"]["05a8ca50-11ab-4ef0-bdf9-fb1b05ce5fa6"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.BeanChanges$Error>) */
            errors?: components["schemas"]["f16d17f3-9a42-461e-a48b-4413ea077905"];
        };
        "f1fd6397-af99-4b40-861b-9160e7c2b436": components["schemas"]["3b97cc24-d21b-4440-9ca8-7368d9b3fc54"][];
        "e5e5de0e-8090-4464-afae-68e432d105db": components["schemas"]["58a174ac-fefe-4b26-92ad-c50628ff463b"][];
        "8eeab183-d360-471f-a330-a9851b08a88f": {
            path?: string;
            name?: string;
        };
        "0eefaa54-5c4d-4af0-af27-2bf8fad3ba84": {
            carrier?: boolean;
            duplex?: string;
            /** Format: int32 */
            speed?: number;
        };
        "2c54f1d8-65b5-4cc9-8c69-8f7ae3eba3f7": {
            /** Format: int32 */
            month?: number;
            /** Format: int32 */
            year?: number;
            /** Format: int32 */
            day?: number;
        };
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext) */
        "b7537e7a-2769-49cb-8d7a-a2201290fed7": components["schemas"]["16f78593-8f22-4749-8591-baf9586047b5"];
        "3dddb5c7-2a06-4756-b971-a08696fca8c7": {
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.device.ManifestNodeInfo>) */
            nodes?: components["schemas"]["e5e5de0e-8090-4464-afae-68e432d105db"];
            /** @description (typeName=java.util.Set<java.lang.String>) */
            nodeTypes?: components["schemas"]["53550dbe-fa22-45a9-9b28-e43f7daafb7d"];
        };
        "16751bf8-b93a-4427-bc25-9391b8bc0883": {
            /** Format: int64 */
            totalBytes?: number;
            /** Format: int64 */
            freeBytes?: number;
        };
        "5422a268-61c4-48e8-ae35-66b2b9f548e4": {
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
        "44731049-0ba5-43cf-bb76-a5ce76655686": {
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
        "720fd127-351b-4498-af1e-9e64b55f3597": {
            country?: string;
            timeFormatId?: string;
            hidden?: boolean;
            unitSystemId?: string;
            id?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            timeZones?: components["schemas"]["40ecc2cd-ddd8-498f-876c-812a936b8661"];
            dateFormatId?: string;
        };
        "f9110fc0-e9c4-44df-9d55-9b83532405ae": {
            /** @description (typeName=byte[]) */
            criticalData?: components["schemas"]["03665f19-c669-4b3c-9130-58650869adaf"];
            /** Format: double */
            sourceWeight?: number;
            /** Format: int32 */
            sourceMaxLength?: number;
            criticalDataReady?: boolean;
        };
        "01bf8fc1-ff2a-4902-acd4-8608f4f76062": {
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
        "ccd799e7-531b-43b9-9726-233ff2a87e48": {
            ampm?: boolean;
            format?: string;
            id?: string;
        };
        "5f221563-d4ff-4381-9040-1d906dcc2a0e": {
            /** @description (typeName=java.lang.Object[]) */
            values?: components["schemas"]["cece5c34-0acf-467e-9762-2ffa80342652"];
            /** @description (typeName=java.lang.Class<? extends com.tccc.kos.commons.core.service.config.options.ConfigOptions>) */
            optionsClass?: components["schemas"]["fde3471a-ec34-4be4-865d-f8cd1881ea72"];
            format?: string;
            /** @description (typeName=com.tccc.kos.commons.core.service.config.options.ConfigOptions) */
            options?: components["schemas"]["ec6ac435-4897-47e1-8947-9ff4a6070c07"];
            type?: string;
            desc?: string;
        };
        "f455169f-a05a-4106-99a6-7a602010b76a": components["schemas"]["68034d69-8ee6-4d2d-aa6b-06ca54525f8a"][];
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info) */
        "d1de6c6d-2698-4612-b210-f860faf659a6": components["schemas"]["cb64fe02-9b4d-45ba-bdc1-8b9a53d4e102"];
        "daad0224-7aac-4ddc-bc4f-a90cc6223fd5": {
            name?: string;
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            artifacts?: components["schemas"]["fa2059f0-6e85-438c-a226-ec4259a886df"];
        };
        "597a3472-7e10-4ae7-87a4-95d62de57c85": {
            path?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.Object>) */
            values?: components["schemas"]["583a4e62-93f6-4018-8b06-b0e29290d3c6"];
            scope?: string;
            replace?: boolean;
        };
        "94d4fd75-99fb-465b-b720-e938b7e11377": {
            redirect?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            browserId?: components["schemas"]["ee6b8630-3f96-4542-b268-a4e294348ef7"];
            url?: string;
        };
        "53550dbe-fa22-45a9-9b28-e43f7daafb7d": string[];
        "2a2c7ba4-a00a-4c29-af19-9973c9639dd7": {
            nodeName?: string;
            hostname?: string;
            id?: string;
            nodeType?: string;
        };
        "86bf1cb9-641f-4376-8458-39b6e84c07c7": {
            /** @description (typeName=com.tccc.kos.ext.freestyle.hardware.can.canbus.CANStats$LinkStats) */
            linkStats?: components["schemas"]["5422a268-61c4-48e8-ae35-66b2b9f548e4"];
            /** @description (typeName=com.tccc.kos.ext.freestyle.hardware.can.canbus.CANStats$DeviceStats) */
            deviceStats?: components["schemas"]["44731049-0ba5-43cf-bb76-a5ce76655686"];
            /** Format: int32 */
            state?: number;
            /** Format: int32 */
            txError?: number;
            /** Format: int32 */
            rxError?: number;
        };
        "66538625-2ef5-428d-953a-cdc88ba37ca9": {
            color?: string;
            /** Format: int32 */
            rank?: number;
            actionRole?: string;
            visibleRole?: string;
        };
        "881ded41-f12d-410c-9437-f8bd526d19fc": components["schemas"]["561a7756-3302-4f29-a34c-5db4b181a08c"][];
        "fc6cef05-1b3c-4f41-9968-f1678d25d3a1": components["schemas"]["e24271cf-84ad-4ef3-97bf-985f3d0acee0"][];
        "bfcfcf3f-073e-4391-8b16-dbece87938e0": components["schemas"]["75a812eb-496e-405a-b381-2195d291bcc8"][];
        "34de036b-4702-460d-9db0-1ee36f7c3ed7": string[];
        "a0fa2920-7f4d-47c2-97ed-9e6ab299fd1e": {
            name?: string;
            value?: string;
        };
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics) */
        "b7833b52-c378-4722-917c-e2ad3b0e8c0f": components["schemas"]["be8f455d-c4c4-4f1d-8629-35c8a19db283"];
        "583a4e62-93f6-4018-8b06-b0e29290d3c6": Record<string, never>;
        "be8f455d-c4c4-4f1d-8629-35c8a19db283": {
            /** Format: int64 */
            lastChangedTimeMono?: number;
            /** Format: double */
            totalVolume?: number;
            internal?: boolean;
            /** Format: int64 */
            creationTimeMS?: number;
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            ingredientIds?: components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
            /** Format: date-time */
            creationDate?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byIngredients?: components["schemas"]["d1de6c6d-2698-4612-b210-f860faf659a6"];
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byPumps?: components["schemas"]["d1de6c6d-2698-4612-b210-f860faf659a6"];
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            pumpPaths?: components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
            removed?: boolean;
            name?: string;
            /** Format: int64 */
            lastChangedTimeMS?: number;
            locked?: boolean;
        };
        "b9f3cff4-5843-4061-9423-e9c16cc36173": {
            val?: string;
            name?: string;
            passed?: boolean;
        };
        "ee6b8630-3f96-4542-b268-a4e294348ef7": {
            browserName?: string;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["2a2c7ba4-a00a-4c29-af19-9973c9639dd7"];
        };
        "e96b9818-a0e3-42f2-aaa5-99ff0d39e705": {
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
        "de14f570-0a7d-4996-a517-71072802ef98": {
            reason?: string;
            note?: string;
            /** @description (typeName=com.tccc.kos.commons.util.ReasonData) */
            reasonData?: components["schemas"]["5fa6526f-b5dc-41bd-8176-26f97682b54e"];
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureWork) */
            rootFuture?: components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureState) */
            endState?: components["schemas"]["dcce1799-a458-4b40-9d13-22a262b96210"];
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
            clientData?: components["schemas"]["fad2937d-d961-4211-93ec-a88c6f39d72e"];
        };
        "0d19b8bb-4cb3-41c9-8725-c1c029a4afdd": string;
        "07d55b37-9430-48f4-ab3c-6ec4c1858097": {
            /** @description (typeName=java.util.Set<com.tccc.kos.ext.dispense.pipeline.ingredient.ops.PumpOp$Grant>) */
            grants?: components["schemas"]["e1bf8755-15e3-4418-b568-f5b8d7b30a14"];
            diluted?: boolean;
            /** Format: double */
            rate?: number;
            errorHandlerId?: string;
            type?: string;
        };
        "bde4e8d7-6fb2-4f7c-bb67-aa59ad81a423": components["schemas"]["6d61fb9a-4261-4586-aac7-68da6398e789"][];
        "d447ab4b-7412-4369-ba96-436601527d6a": {
            empty?: boolean;
        };
        "18a13db7-a160-4fbd-b2af-56bef4f68f96": unknown;
        "9d30067a-fc1d-4ab6-964c-7a93f6bd51f1": {
            parent?: string;
            /** @description (typeName=java.io.File) */
            parentFile?: components["schemas"]["9d30067a-fc1d-4ab6-964c-7a93f6bd51f1"];
            hidden?: boolean;
            /** Format: int64 */
            freeSpace?: number;
            /** Format: int64 */
            totalSpace?: number;
            /** Format: int64 */
            usableSpace?: number;
            /** @description (typeName=java.io.File) */
            canonicalFile?: components["schemas"]["9d30067a-fc1d-4ab6-964c-7a93f6bd51f1"];
            directory?: boolean;
            path?: string;
            /** @description (typeName=java.io.File) */
            absoluteFile?: components["schemas"]["9d30067a-fc1d-4ab6-964c-7a93f6bd51f1"];
            file?: boolean;
            absolute?: boolean;
            name?: string;
            canonicalPath?: string;
            absolutePath?: string;
        };
        /** Format: double */
        "8da2ac3c-4b7f-4479-9938-5beb7fc39469": number;
        "5764dee5-367e-44da-8876-07d2b71c4f23": {
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
        "12b6d730-338c-41bd-bd4a-8db5b5259d49": {
            kmfJson?: string;
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            layers?: components["schemas"]["fa2059f0-6e85-438c-a226-ec4259a886df"];
            kosVersion?: string;
            nodeType?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestSection>) */
            sections?: components["schemas"]["393cf9ed-e817-462e-9f36-1d516ada1ed2"];
            /** @description (typeName=java.util.Collection<? extends com.tccc.kos.commons.manifest.ManifestArtifact>) */
            artifacts?: components["schemas"]["fa2059f0-6e85-438c-a226-ec4259a886df"];
        };
        "3039022e-41cf-4042-b947-44d3e89194bb": components["schemas"]["cbed9104-fa1f-4bbc-9406-b147f558c5df"][];
        "3f94c4b1-eb19-4fe2-a3bd-7214523b0ab2": components["schemas"]["8b745610-da2f-40d7-a8c5-fb67c2cf9885"][];
        "3f6bd6af-8dc9-480b-960d-b46e93548879": string[];
        "8e657896-8319-44d8-8f89-a99169d7ef6a": {
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.format.date.DateFormat>) */
            dateFormats?: components["schemas"]["973e06b8-2405-4a63-b37f-43f8866d63a8"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.units.UnitSystem>) */
            unitSystems?: components["schemas"]["d1897037-f9fe-49fc-804d-3167e6db3155"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.commons.util.format.time.TimeFormat>) */
            timeFormats?: components["schemas"]["ecd1fbb4-616a-46d5-91bb-9fb4229eef96"];
        };
        "891d70f2-a5f6-4bfd-9497-74c8cb0feee7": string[];
        /** @description (typeName=com.tccc.kos.commons.core.service.config.MethodPair$MethodSchema) */
        "ff131f27-b4bc-4a30-ba69-9cee7e4b4566": components["schemas"]["5f221563-d4ff-4381-9040-1d906dcc2a0e"];
        "0ba38ef9-9a9e-436e-be9b-cce0dd0d27b7": {
            deviceType?: string;
            nextManifestId?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
            installArtifacts?: components["schemas"]["f3cfcbed-2ed7-4513-87de-d6593d7d6bae"];
            name?: string;
            manifestType?: string;
            /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
            installLayers?: components["schemas"]["f3cfcbed-2ed7-4513-87de-d6593d7d6bae"];
            /** Format: int32 */
            version?: number;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
            /** @description (typeName=java.util.Map<java.lang.String, java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>>) */
            sections?: components["schemas"]["8804532a-83e7-4eeb-a04e-3c99999814c2"];
        };
        "75a812eb-496e-405a-b381-2195d291bcc8": {
            reason?: string;
            /** Format: date-time */
            createTime?: string;
            resolvable?: boolean;
            /** @description (typeName=java.util.Set<java.lang.String>) */
            ifaces?: components["schemas"]["abaf9b51-534a-4358-a9bd-1c71789261ff"];
            /** Format: int32 */
            id?: number;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["f3a47d37-dc00-4d15-a789-6a66ac90aff5"];
            type?: string;
            /** @description (typeName=java.util.Set<java.lang.String>) */
            tags?: components["schemas"]["abaf9b51-534a-4358-a9bd-1c71789261ff"];
            /** @description (typeName=com.tccc.kos.commons.core.service.trouble.TroubleInfo) */
            info?: components["schemas"]["66538625-2ef5-428d-953a-cdc88ba37ca9"];
            group?: string;
        };
        "5b9fcdc1-8d6b-4066-991f-d1b8d0ffc6d7": {
            /** @description (typeName=com.tccc.kos.commons.util.ListenerList<com.tccc.kos.commons.core.service.config.ConfigBeanListener>) */
            listeners?: components["schemas"]["a8dca04c-75f8-4e57-a244-e804c9b10e1b"];
        };
        "3a61787d-2b6c-4480-9b19-9d708aea3dfd": components["schemas"]["75a812eb-496e-405a-b381-2195d291bcc8"][];
        "57b0a0fe-6178-4461-9f77-92654af615f2": {
            /** @description (typeName=java.util.List<com.tccc.kos.ext.freestyle.service.brandset.regulatory.NutritionVolume>) */
            volumes?: components["schemas"]["7d50f5f1-397c-4a67-a506-9ac17ea133fc"];
            error?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            labels?: components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
        };
        "cf0831d5-59d0-439d-bc36-2b05d9d17b4c": components["schemas"]["9574ad7b-cd4b-4692-b71e-4ee2dd2620b6"][];
        "789286b9-9831-452a-a408-27600f488efc": {
            empty?: boolean;
        };
        "785e3caf-ba96-41d3-a33f-1e9dfd9fed6d": {
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.service.config.MethodPair$MethodSchema>) */
            schema?: components["schemas"]["ff131f27-b4bc-4a30-ba69-9cee7e4b4566"];
            /** @description (typeName=java.util.List<java.lang.String>) */
            paths?: components["schemas"]["40ecc2cd-ddd8-498f-876c-812a936b8661"];
        };
        "eedb6583-4428-40dd-8f24-0f906f6d554b": {
            path?: string;
            basePath?: string;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.cms.service.screen.Screen>) */
            screens?: components["schemas"]["651ba3c6-e90f-40c2-985f-f711b695323b"];
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            details?: components["schemas"]["fad2937d-d961-4211-93ec-a88c6f39d72e"];
            type?: string;
        };
        "d1897037-f9fe-49fc-804d-3167e6db3155": components["schemas"]["57ee16f3-36e6-4eaf-a9bb-8d8f69c0c6f2"][];
        "00fd229e-2f1f-406a-98b0-1d5c3f8fac68": {
            displayValue?: string;
            units?: string;
            type?: string;
        };
        "9ed7f5ef-b5cd-4f1a-9181-acd51168d6ec": {
            /** Format: double */
            volume?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.freestyle.service.brandset.regulatory.NutritionVolume$RoundedValue>) */
            values?: components["schemas"]["f918e4cd-f8fb-4ab3-a77d-9edb18cbfbde"];
        };
        "3b97cc24-d21b-4440-9ca8-7368d9b3fc54": unknown;
        "27de4147-dcf5-4c8e-83f4-f35a80cc5cf0": {
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
        /** @description (typeName=java.util.Collection<? extends com.tccc.kos.ext.dispense.service.ingredient.BaseIngredient>) */
        "4576f34a-3e28-498f-844b-c391d7f72579": components["schemas"]["30c03179-bd24-4ee1-967b-4d2eb8fc9cd0"];
        "ecd1fbb4-616a-46d5-91bb-9fb4229eef96": components["schemas"]["ccd799e7-531b-43b9-9726-233ff2a87e48"][];
        "e4787f35-6aa2-4758-8eba-6778a70d3997": unknown;
        "3f962e8a-32ff-46eb-a2c5-c5873e0de6f8": {
            mfgAuthority?: string;
            /** @description (typeName=com.tccc.kos.commons.util.Mode) */
            mode?: components["schemas"]["33cdf0e9-bc1e-4db7-b81f-e153177ea238"];
            identifier?: string;
            vendorAuthority?: string;
            /** @description (typeName=java.io.File) */
            file?: components["schemas"]["9d30067a-fc1d-4ab6-964c-7a93f6bd51f1"];
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
        "0d9d3d80-dcd2-49b2-92c3-a474e202b923": {
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
            byIngredients?: components["schemas"]["01c7b8db-e2db-4ed1-9ded-a33ae2f2bd54"];
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info>) */
            byPumps?: components["schemas"]["01c7b8db-e2db-4ed1-9ded-a33ae2f2bd54"];
        };
        "f9bcdc30-7cda-42e5-9cd9-044d96669fb3": string;
        "a326a606-4885-4267-b0d3-ea957d73cef7": unknown;
        "14328a69-7340-4a01-b7fa-4518cc0af320": {
            inProgress?: boolean;
            name?: string;
            id?: string;
            passed?: boolean;
            /** Format: int64 */
            failureTime?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.ddk.service.network.TestResult>) */
            results?: components["schemas"]["6cefe868-fc24-4b5a-9d64-43383095a275"];
            /** Format: int64 */
            timestamp?: number;
            info?: Record<string, never>;
            group?: string;
        };
        "40ecc2cd-ddd8-498f-876c-812a936b8661": string[];
        "7a740e5c-7baa-49e8-92a6-246aa9875152": {
            preStep?: boolean;
            name?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.Object>) */
            options?: components["schemas"]["583a4e62-93f6-4018-8b06-b0e29290d3c6"];
            exclusive?: boolean;
            complete?: boolean;
        };
        "397c8b7a-d296-43a7-bf22-b69cee44be83": components["schemas"]["07d55b37-9430-48f4-ab3c-6ec4c1858097"][];
        "f216ef9f-757c-41bd-82fe-dd2af014f392": unknown;
        "a2a87204-17af-49cb-8ff9-4bb7c0b7196d": unknown;
        "ec6ac435-4897-47e1-8947-9ff4a6070c07": {
            type?: string;
        };
        "0778181b-b96c-417d-a881-fd07482286f7": components["schemas"]["b5ca36b3-aff5-4067-87c7-7ff7c9a76408"][];
        "f3a47d37-dc00-4d15-a789-6a66ac90aff5": unknown;
        "2b42d45f-e2e1-4676-a55c-104e2fa53baa": components["schemas"]["384cef60-20f6-4a85-98c8-59458f08e6b3"][];
        "0ca43859-f058-4826-a7c6-169c94d98dc5": components["schemas"]["f9110fc0-e9c4-44df-9d55-9b83532405ae"][];
        "86a43354-f558-422b-8339-404871f3f4e3": {
            sourceId?: string;
            name?: string;
            id?: string;
            type?: string;
        };
        "30c03179-bd24-4ee1-967b-4d2eb8fc9cd0": components["schemas"]["86a43354-f558-422b-8339-404871f3f4e3"][];
        "973e06b8-2405-4a63-b37f-43f8866d63a8": components["schemas"]["541c086c-0ac2-42e1-855e-0844533bdb2a"][];
        "cb64fe02-9b4d-45ba-bdc1-8b9a53d4e102": {
            /** Format: double */
            volume?: number;
        };
        "b8745dc1-0b80-4434-b500-40fa346970fd": {
            redirect?: boolean;
            url?: string;
        };
        "9a4a9a9c-e711-461d-b092-0baf156cd761": {
            baseUrl?: string;
            appId?: string;
            /** @description (typeName=com.fasterxml.jackson.databind.JsonNode) */
            descriptor?: components["schemas"]["264f0908-eb0e-4bd8-88f1-b50082ea62f1"];
            id?: string;
            enabled?: boolean;
        };
        "65bc1387-cc6b-4494-8f78-cccf5f51bc7f": {
            name?: string;
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedManifestArtifact>) */
            artifacts?: components["schemas"]["37afc3cd-a7f2-41de-abdc-45940c175ee7"];
        };
        "2834d648-da1d-435c-a030-b9ac198f6664": components["schemas"]["7a740e5c-7baa-49e8-92a6-246aa9875152"][];
        "f9a563f9-36c5-4167-941e-5d520fd2005e": components["schemas"]["b562df1e-9079-4d4e-9f6d-0b02ee44ff0f"][];
        "e4cad973-fa10-46db-9ff9-11797d0ddc19": unknown;
        "541c086c-0ac2-42e1-855e-0844533bdb2a": {
            format?: string;
            id?: string;
            order?: string;
        };
        "fde3471a-ec34-4be4-865d-f8cd1881ea72": unknown;
        "fa2059f0-6e85-438c-a226-ec4259a886df": components["schemas"]["e6112e14-c489-4443-af03-db5cbbe39d62"][];
        "e24271cf-84ad-4ef3-97bf-985f3d0acee0": {
            stream?: string;
            /** Format: int32 */
            startLineNum?: number;
            /** Format: int64 */
            startTime?: number;
            /** Format: int32 */
            blockNum?: number;
            /** Format: int64 */
            endTime?: number;
            /** @description (typeName=java.util.List<java.lang.String>) */
            lines?: components["schemas"]["40ecc2cd-ddd8-498f-876c-812a936b8661"];
            nodeId?: string;
            /** Format: int32 */
            endLineNum?: number;
            /** Format: int32 */
            lineCount?: number;
        };
        "89804ed5-604c-4d7d-978c-1e5e24a86362": components["schemas"]["597a3472-7e10-4ae7-87a4-95d62de57c85"][];
        "033f1be1-1fcb-4824-a625-a8b78f450bb4": components["schemas"]["3d191492-c7c9-47fa-89e8-51ca9515a458"][];
        "7f256d2e-d30c-4527-864d-9685bfd8a7c4": components["schemas"]["27de4147-dcf5-4c8e-83f4-f35a80cc5cf0"][];
        "29e6e455-d167-4f03-907d-f6163e1eca43": {
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.localization.LocalizationContext$CtxLocaleInfo>) */
            locales?: components["schemas"]["0632a03b-8005-44ab-b858-fedf47a3edd4"];
        };
        "ebd5f5f4-1119-4aba-93b9-cb703e9c5466": unknown;
        "0a65a2ab-3570-4b6d-9b54-70b550ce9d0f": unknown;
        "f918e4cd-f8fb-4ab3-a77d-9edb18cbfbde": components["schemas"]["00fd229e-2f1f-406a-98b0-1d5c3f8fac68"][];
        "bb2d425f-5d78-4736-9e8a-5c53aa442087": {
            reason?: string;
            note?: string;
            /** @description (typeName=com.tccc.kos.commons.util.ReasonData) */
            reasonData?: components["schemas"]["5fa6526f-b5dc-41bd-8176-26f97682b54e"];
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureState) */
            endState?: components["schemas"]["dcce1799-a458-4b40-9d13-22a262b96210"];
            /** Format: int32 */
            index?: number;
            /** Format: int32 */
            abortAbandonedTimeoutMs?: number;
            childReason?: string;
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureWork) */
            rootFuture?: components["schemas"]["de14f570-0a7d-4996-a517-71072802ef98"];
            tracker?: string;
            /** Format: int64 */
            remainingTimeMs?: number;
            name?: string;
            /** Format: int32 */
            progress?: number;
            /** Format: int32 */
            id?: number;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["fad2937d-d961-4211-93ec-a88c6f39d72e"];
        };
        "72b9d91a-471e-4a8b-85f7-1f21fdea5f07": components["schemas"]["a778470d-eacc-4b9c-ba97-bdb515bad035"][];
        "09e9fafc-9fe9-4891-88b4-74c5669ebfbc": {
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
        "00a750ae-8201-4bd0-a1e9-c0abe056076b": {
            tracker?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.service.config.BeanChanges>) */
            beanChanges?: components["schemas"]["49680ab9-231c-447d-b47b-1d27822eca63"];
        };
        /** @description (typeName=java.util.Set<com.tccc.kos.commons.manifest.BaseManifestArtifact>) */
        "8804532a-83e7-4eeb-a04e-3c99999814c2": components["schemas"]["f3cfcbed-2ed7-4513-87de-d6593d7d6bae"];
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext$CtxNamespace) */
        "17f9c955-2f05-413f-be54-3ea9458b39a9": components["schemas"]["29e6e455-d167-4f03-907d-f6163e1eca43"];
        "23a9ed22-17c1-4d27-9511-0740e22ba528": {
            /** @description (typeName=com.tccc.kos.commons.core.service.config.ConfigSchema) */
            schema?: components["schemas"]["785e3caf-ba96-41d3-a33f-1e9dfd9fed6d"];
            path?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            defaults?: components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.ConfigDetails$ScopeData>) */
            scopes?: components["schemas"]["b57110fb-2065-4176-817a-dca69ffb3a58"];
            /** @description (typeName=com.tccc.kos.commons.core.service.config.ConfigBean) */
            bean?: components["schemas"]["5b9fcdc1-8d6b-4066-991f-d1b8d0ffc6d7"];
        };
        "dd652504-38bc-470b-912a-7c776fb779ac": components["schemas"]["720fd127-351b-4498-af1e-9e64b55f3597"][];
        "8d474b0d-c3c9-42af-9de6-343305be767a": {
            type?: string;
            /** @description (typeName=com.tccc.kos.commons.manifest.chained.ChainedManifest) */
            chainedManifest?: components["schemas"]["0ba38ef9-9a9e-436e-be9b-cce0dd0d27b7"];
            /** @description (typeName=com.tccc.kos.commons.kab.KabFile) */
            kab?: components["schemas"]["3f962e8a-32ff-46eb-a2c5-c5873e0de6f8"];
        };
        "706e3c63-209a-42e8-9194-a9e22a5c6ed4": {
            /** @description (typeName=com.tccc.kos.commons.manifest.ManifestArtifact) */
            artifact?: components["schemas"]["e6112e14-c489-4443-af03-db5cbbe39d62"];
            identifier?: string;
            incomplete?: boolean;
            /** @description (typeName=com.tccc.kos.commons.kab.KabFile) */
            kab?: components["schemas"]["3f962e8a-32ff-46eb-a2c5-c5873e0de6f8"];
        };
        "cece5c34-0acf-467e-9762-2ffa80342652": unknown;
        "3b440e3c-f23e-41ce-9145-e7b9b92219b8": components["schemas"]["59845527-049b-48ad-9277-d5720b043154"][];
        /** @description (typeName=com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics$Info) */
        "01c7b8db-e2db-4ed1-9ded-a33ae2f2bd54": components["schemas"]["a326a606-4885-4267-b0d3-ea957d73cef7"];
        "a292aaca-8bc2-4f58-8cfc-c30b2bd41767": {
            rebuild?: boolean;
            /** @description (typeName=com.tccc.kos.commons.util.MultiValueMap<java.lang.String, com.tccc.kos.ext.dispense.pipeline.beverage.graph.Availability>) */
            groups?: components["schemas"]["789286b9-9831-452a-a408-27600f488efc"];
        };
        "668ce662-2977-4991-965c-f8078368f05f": {
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
        "dcce1799-a458-4b40-9d13-22a262b96210": {
            cancel?: boolean;
            fail?: boolean;
            abort?: boolean;
            success?: boolean;
            /** @description (typeName=com.tccc.kos.commons.util.concurrent.future.FutureEvent) */
            futureEvent?: components["schemas"]["62ee4e7b-2a47-40db-ab2a-52dc4b8abfed"];
            terminate?: boolean;
            done?: boolean;
        };
        "b5628d97-9036-41d0-ab0c-cc9a155e1562": components["schemas"]["b63d8948-e4cf-4fc1-8ec0-a31e17750976"][];
        "abaf9b51-534a-4358-a9bd-1c71789261ff": string[];
        "9ad42bae-49e6-4b12-9f5a-8fea3fde2693": components["schemas"]["e6112e14-c489-4443-af03-db5cbbe39d62"][];
        "5fa6526f-b5dc-41bd-8176-26f97682b54e": {
            /** @description (typeName=java.lang.Class<?>) */
            view?: components["schemas"]["ebd5f5f4-1119-4aba-93b9-cb703e9c5466"];
            data?: Record<string, never>;
        };
        "9265eacc-abfa-491d-881c-33697c720ab3": number[];
        "b5ca36b3-aff5-4067-87c7-7ff7c9a76408": {
            note?: string;
            visible?: boolean;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.dispense.pipeline.beverage.graph.GraphNode>) */
            children?: components["schemas"]["0778181b-b96c-417d-a881-fd07482286f7"];
            available?: boolean;
            id?: string;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["41926d0d-5352-44a7-8c91-26716420707a"];
            type?: string;
            /** Format: int32 */
            version?: number;
        };
        "deee0193-6493-4728-a269-1093fae1423e": components["schemas"]["706e3c63-209a-42e8-9194-a9e22a5c6ed4"][];
        "41926d0d-5352-44a7-8c91-26716420707a": unknown;
        "fad2937d-d961-4211-93ec-a88c6f39d72e": {
            /** @description (typeName=java.lang.Class<?>) */
            view?: components["schemas"]["ebd5f5f4-1119-4aba-93b9-cb703e9c5466"];
            data?: Record<string, never>;
        };
        "f3cfcbed-2ed7-4513-87de-d6593d7d6bae": components["schemas"]["6b127600-ad5b-4127-9370-73fa6f4f8865"][];
        "b57110fb-2065-4176-817a-dca69ffb3a58": components["schemas"]["f001a00f-f731-44b4-aab5-4cde829267be"][];
        "d037eba9-987c-4af4-85fd-6dafdadbe4c8": components["schemas"]["65bc1387-cc6b-4494-8f78-cccf5f51bc7f"][];
        "4e9cf507-8ec7-4e09-9a93-fb6148f6c359": {
            deviceType?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            properties?: components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
            /** @description (typeName=com.tccc.kos.commons.manifest.device.ManifestDeviceInfo) */
            deviceInfo?: components["schemas"]["3dddb5c7-2a06-4756-b971-a08696fca8c7"];
        };
        "82610e6f-2f0c-4737-988f-45b589d4bd24": {
            scope?: string;
            attr?: string;
            previousValue?: string;
            currentValue?: string;
        };
        "e3c8b6e3-8a94-4379-9cfa-855bcd662b1e": {
            val?: string;
            reason?: string;
            attr?: string;
        };
        "711eb5e5-5628-41ea-bb54-a99d5870a5ce": components["schemas"]["2b922838-a576-4896-9fb5-5096c5fb0933"][];
        "05a8ca50-11ab-4ef0-bdf9-fb1b05ce5fa6": components["schemas"]["82610e6f-2f0c-4737-988f-45b589d4bd24"][];
        "3e3f2542-c01c-4bbe-9a49-6e205d507848": components["schemas"]["7499d58d-1370-42a0-bcbe-bdb0f87185dd"][];
        "7499d58d-1370-42a0-bcbe-bdb0f87185dd": {
            apiUrl?: string;
            basePath?: string;
            name?: string;
        };
        "16f78593-8f22-4749-8591-baf9586047b5": {
            path?: string;
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            locales?: components["schemas"]["891d70f2-a5f6-4bfd-9497-74c8cb0feee7"];
            basePath?: string;
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            details?: components["schemas"]["fad2937d-d961-4211-93ec-a88c6f39d72e"];
            type?: string;
            /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.commons.core.localization.LocalizationContext$CtxNamespace>) */
            namespaces?: components["schemas"]["17f9c955-2f05-413f-be54-3ea9458b39a9"];
        };
        /** @description (typeName=com.tccc.kos.commons.core.service.config.BeanChanges) */
        "49680ab9-231c-447d-b47b-1d27822eca63": components["schemas"]["30bb47ff-d240-426b-be35-04974838b84c"];
        "9960a488-8fe0-41cc-8cb4-9e18e603c1a6": components["schemas"]["569a9675-f0fc-47ed-9698-723b86a8c52c"][];
        "6d61fb9a-4261-4586-aac7-68da6398e789": {
            note?: string;
            visible?: boolean;
            available?: boolean;
            id?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            taggedIds?: components["schemas"]["40ecc2cd-ddd8-498f-876c-812a936b8661"];
            /** @description (typeName=com.tccc.kos.commons.util.json.JsonViewWrapper) */
            clientData?: components["schemas"]["fad2937d-d961-4211-93ec-a88c6f39d72e"];
            altId?: string;
        };
        "569a9675-f0fc-47ed-9698-723b86a8c52c": {
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
        "6cefe868-fc24-4b5a-9d64-43383095a275": components["schemas"]["b9f3cff4-5843-4061-9423-e9c16cc36173"][];
        "2b922838-a576-4896-9fb5-5096c5fb0933": {
            name?: string;
            id?: string;
            group?: string;
        };
        "f50fe02a-930b-4cee-a878-ffa2430c71cd": {
            /** @description (typeName=java.util.List<java.lang.String>) */
            scopeNames?: components["schemas"]["40ecc2cd-ddd8-498f-876c-812a936b8661"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.core.service.config.ConfigDetails>) */
            details?: components["schemas"]["d20c825e-a0e2-44da-a100-dec11953ef1b"];
        };
        "62ee4e7b-2a47-40db-ab2a-52dc4b8abfed": unknown;
        "87bf05fc-3ca5-40b3-828d-0e964e145034": unknown;
        "adab7d46-5526-45c6-a6ee-d0cc228f0f23": {
            incomplete?: boolean;
            /** @description (typeName=com.tccc.kos.commons.manifest.NodeManifest) */
            nodeManifest?: components["schemas"]["12b6d730-338c-41bd-bd4a-8db5b5259d49"];
            /** @description (typeName=java.util.Set<com.tccc.kos.core.manifest.ResolvedManifestArtifact>) */
            layers?: components["schemas"]["deee0193-6493-4728-a269-1093fae1423e"];
            /** @description (typeName=java.util.List<com.tccc.kos.commons.manifest.ManifestArtifact>) */
            missingArtifacts?: components["schemas"]["9ad42bae-49e6-4b12-9f5a-8fea3fde2693"];
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedManifestSection>) */
            sections?: components["schemas"]["d037eba9-987c-4af4-85fd-6dafdadbe4c8"];
        };
        /** Format: float */
        "6ede4c82-355f-4cb6-a9af-d41e60d77bed": number;
        "e6112e14-c489-4443-af03-db5cbbe39d62": {
            identifier?: string;
            /** Format: int64 */
            size?: number;
            miniHash?: string;
            hash?: string;
        };
        "4ad4ab85-2a7c-49b5-8a9c-c42926a137ed": {
            /** Format: int64 */
            insertTime?: number;
            /** @description (typeName=com.tccc.kos.ext.freestyle.hardware.rfid.freestyle.FreestyleRfidTag) */
            rfidTag?: components["schemas"]["09e9fafc-9fe9-4891-88b4-74c5669ebfbc"];
            id?: string;
            /** @description (typeName=java.lang.String[]) */
            ingredientIds?: components["schemas"]["18a13db7-a160-4fbd-b2af-56bef4f68f96"];
            locked?: boolean;
            intrinsic?: boolean;
            soldOut?: boolean;
            /** Format: date-time */
            piercedDate?: string;
            mark?: string;
        };
        "cbed9104-fa1f-4bbc-9406-b147f558c5df": {
            /** @description (typeName=com.tccc.kos.commons.util.ListenerList<com.tccc.kos.core.service.udev.storage.StorageMountListener>) */
            listeners?: components["schemas"]["f1fd6397-af99-4b40-861b-9160e7c2b436"];
            removed?: boolean;
            vendor?: string;
            /** @description (typeName=java.io.File) */
            mountDir?: components["schemas"]["9d30067a-fc1d-4ab6-964c-7a93f6bd51f1"];
            model?: string;
            label?: string;
            id?: string;
            /** Format: int64 */
            runTimeMs?: number;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["2a2c7ba4-a00a-4c29-af19-9973c9639dd7"];
            syspath?: string;
            /** @description (typeName=com.tccc.kos.core.service.udev.storage.StorageInfo) */
            storageInfo?: components["schemas"]["16751bf8-b93a-4427-bc25-9391b8bc0883"];
            local?: boolean;
        };
        "cb24ade3-3367-4a6d-aff3-d91b9e3af7ae": components["schemas"]["785e3caf-ba96-41d3-a33f-1e9dfd9fed6d"][];
        "f001a00f-f731-44b4-aab5-4cde829267be": {
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            defaults?: components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
            scope?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.String>) */
            overrides?: components["schemas"]["0d19b8bb-4cb3-41c9-8725-c1c029a4afdd"];
        };
        "a8dca04c-75f8-4e57-a244-e804c9b10e1b": components["schemas"]["a2a87204-17af-49cb-8ff9-4bb7c0b7196d"][];
        /** @description (typeName=com.tccc.kos.ddk.service.network.NetworkTestReport) */
        "3740b8ce-c107-4d22-ba5f-e756e5c8fa7d": components["schemas"]["14328a69-7340-4a01-b7fa-4518cc0af320"];
        "58a174ac-fefe-4b26-92ad-c50628ff463b": {
            nodeName?: string;
            optional?: boolean;
            nodeType?: string;
            /** @description (typeName=com.tccc.kos.commons.util.NodeId) */
            nodeId?: components["schemas"]["2a2c7ba4-a00a-4c29-af19-9973c9639dd7"];
            primary?: boolean;
        };
        "68034d69-8ee6-4d2d-aa6b-06ca54525f8a": {
            /** Format: double */
            position?: number;
            /** Format: double */
            group?: number;
        };
        "50e6125f-4b01-4da5-9ee0-432f4c1eb000": {
            /** @description (typeName=com.tccc.kos.commons.manifest.BaseManifestArtifact) */
            artifactInfo?: components["schemas"]["6b127600-ad5b-4127-9370-73fa6f4f8865"];
            /** @description (typeName=java.util.Collection<com.tccc.kos.core.primary.service.ota.OTADownloadRequest>) */
            requests?: components["schemas"]["9960a488-8fe0-41cc-8cb4-9e18e603c1a6"];
            error?: string;
            done?: boolean;
            /** @description (typeName=com.tccc.kos.core.primary.service.ota.OTAArtifact$Status) */
            status?: components["schemas"]["e4cad973-fa10-46db-9ff9-11797d0ddc19"];
        };
        "5b566b38-82fc-4a4f-829a-39dab1f6dc9f": components["schemas"]["50e6125f-4b01-4da5-9ee0-432f4c1eb000"][];
        "cd220e8c-9e18-459c-8bbf-3da73e817a49": {
            /** @description (typeName=com.tccc.kos.commons.util.MultiValueMap<java.lang.String, com.tccc.kos.core.service.manifest.NodeSoftwareInfo>) */
            nodes?: components["schemas"]["d447ab4b-7412-4369-ba96-436601527d6a"];
        };
        "767e47f0-f826-4ffe-9a8a-0a90d0620fea": {
            manifestId?: string;
            deviceId?: string;
        };
        "384cef60-20f6-4a85-98c8-59458f08e6b3": {
            defaultHost?: string;
            lastUrl?: string;
            online?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            id?: components["schemas"]["04cf5054-d837-4dc5-9e87-cb387ef6b69c"];
        };
        "f44bb83f-dfe5-42c1-8c66-564bf8565616": {
            /** @description (typeName=java.util.List<com.tccc.kos.ext.freestyle.service.micro.calibration.MicroCalibrationReport$PumpReport>) */
            pumps?: components["schemas"]["2d651856-fa35-4a12-b059-63b742955c50"];
            boardPath?: string;
        };
        "e1bf8755-15e3-4418-b568-f5b8d7b30a14": components["schemas"]["a0fa2920-7f4d-47c2-97ed-9e6ab299fd1e"][];
        "ec228ba8-bf5a-483a-9ac4-d01ff7ccbf6e": unknown;
        "b3b289d2-8594-4355-aff2-a31694c53ce7": {
            /** @description (typeName=java.util.List<java.lang.String>) */
            addressprefixlist?: components["schemas"]["40ecc2cd-ddd8-498f-876c-812a936b8661"];
            address?: string;
            method?: string;
            /** Format: int32 */
            prefix?: number;
            /** @description (typeName=java.util.List<java.lang.String>) */
            dnslist?: components["schemas"]["40ecc2cd-ddd8-498f-876c-812a936b8661"];
            gateway?: string;
        };
        "94b835ba-2a43-42da-b5d1-6424b16aa79b": components["schemas"]["4ad4ab85-2a7c-49b5-8a9c-c42926a137ed"][];
        "517d8784-f157-4c5d-bace-05afe5c80b01": {
            configured?: boolean;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.EthernetDetails) */
            ethernet?: components["schemas"]["0eefaa54-5c4d-4af0-af27-2bf8fad3ba84"];
            /** @description (typeName=com.tccc.kos.core.service.network.beans.WifiDetails) */
            wifi?: components["schemas"]["668ce662-2977-4991-965c-f8078368f05f"];
            hwaddress?: string;
            name?: string;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.Ip4Settings) */
            ip4settings?: components["schemas"]["b3b289d2-8594-4355-aff2-a31694c53ce7"];
            type?: string;
            /** @description (typeName=com.tccc.kos.core.service.network.beans.NetworkInterfaceCategory) */
            category?: components["schemas"]["87bf05fc-3ca5-40b3-828d-0e964e145034"];
            /** Format: int32 */
            nmdevicestate?: number;
            /** Format: int32 */
            mtu?: number;
        };
        "6b127600-ad5b-4127-9370-73fa6f4f8865": {
            identifier?: string;
            /** Format: int64 */
            size?: number;
            miniHash?: string;
            name?: string;
            version?: string;
            hash?: string;
        };
        "a0e80cf7-b2cc-4cf3-b71d-bb2c0f488879": unknown;
        "37afc3cd-a7f2-41de-abdc-45940c175ee7": components["schemas"]["706e3c63-209a-42e8-9194-a9e22a5c6ed4"][];
        "a778470d-eacc-4b9c-ba97-bdb515bad035": {
            level?: string;
            name?: string;
            type?: string;
            nodeType?: string;
        };
        "3d191492-c7c9-47fa-89e8-51ca9515a458": {
            summary?: string;
            /** @description (typeName=java.util.List<java.lang.String>) */
            details?: components["schemas"]["40ecc2cd-ddd8-498f-876c-812a936b8661"];
        };
        "d20c825e-a0e2-44da-a100-dec11953ef1b": components["schemas"]["23a9ed22-17c1-4d27-9511-0740e22ba528"][];
        "cda5f674-ce86-4e53-a2b5-5b392637bd17": {
            pumpPath?: string;
            /** @description (typeName=com.tccc.kos.ext.freestyle.service.micro.calibration.MicroCalibration) */
            pumpCal?: components["schemas"]["e1a30ba5-2eed-4079-99d4-405734dbb337"];
            /** @description (typeName=com.tccc.kos.ext.freestyle.service.micro.calibration.MicroCalibration) */
            storageCal?: components["schemas"]["e1a30ba5-2eed-4079-99d4-405734dbb337"];
        };
        /** @description (typeName=com.tccc.kos.commons.core.localization.LocalizationContext$CtxLocaleInfo) */
        "0632a03b-8005-44ab-b858-fedf47a3edd4": components["schemas"]["26e7b8e5-e134-4ea0-99b6-538a5f7cdc9e"];
        "0d0dd7bd-1254-4b9e-84d8-bca4e5f1f04e": {
            visible?: boolean;
            /** @description (typeName=com.tccc.kos.ext.freestyle.service.fuelgauge.FuelGaugeData) */
            data?: components["schemas"]["01bf8fc1-ff2a-4902-acd4-8608f4f76062"];
        };
        "ec96b360-236b-470e-835b-73e1cbcecda5": components["schemas"]["5764dee5-367e-44da-8876-07d2b71c4f23"][];
        "8ddf57fa-ff14-4422-84eb-95cbb34b6b23": {
            serialNumber?: string;
            name?: string;
            nodeId?: string;
        };
        "180fc4ba-9e01-4618-994e-666fd4012092": components["schemas"]["9a4a9a9c-e711-461d-b092-0baf156cd761"][];
        "da1a9959-460e-4d2c-9739-1607c48ae0ca": {
            /** Format: int32 */
            sec?: number;
            /** Format: int32 */
            min?: number;
            /** Format: int32 */
            hour?: number;
        };
        "aa99236c-3d65-44b2-8fd5-fff395ec76ec": components["schemas"]["8d474b0d-c3c9-42af-9de6-343305be767a"][];
        "8b745610-da2f-40d7-a8c5-fb67c2cf9885": {
            ingredientId?: string;
            holderPath?: string;
            /** Format: int64 */
            createTime?: number;
            factoryJson?: string;
            containerId?: string;
            error?: string;
        };
        "7d50f5f1-397c-4a67-a506-9ac17ea133fc": components["schemas"]["9ed7f5ef-b5cd-4f1a-9181-acd51168d6ec"][];
        /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ddk.service.network.NetworkTestReport>) */
        "268d7b7a-c501-4b5a-9bbe-8b0197251145": components["schemas"]["3740b8ce-c107-4d22-ba5f-e756e5c8fa7d"];
        "e1a30ba5-2eed-4079-99d4-405734dbb337": {
            /** Format: double */
            running?: number;
            noStorage?: boolean;
            /** Format: double */
            baseline?: number;
            calibrated?: boolean;
        };
        "2b9b9035-be53-42fc-a2b5-60990f1fd881": {
            /** Format: int64 */
            estimatedTime?: number;
            /** @description (typeName=java.util.List<com.tccc.kos.ext.dispense.pipeline.ingredient.ops.PumpOp>) */
            ops?: components["schemas"]["397c8b7a-d296-43a7-bf22-b69cee44be83"];
            name?: string;
            errorHandlerId?: string;
            delegated?: boolean;
            source?: string;
            type?: string;
            /** Format: double */
            estimatedVolume?: number;
            /** @description (typeName=com.tccc.kos.ext.dispense.pipeline.ingredient.ops.PumpOp) */
            activeOp?: components["schemas"]["07d55b37-9430-48f4-ab3c-6ec4c1858097"];
            runDry?: boolean;
        };
        /** @description (typeName=java.util.Map<java.lang.String, com.tccc.kos.ext.dispense.service.nozzle.metrics.NozzleMetrics>) */
        "e90ced47-834a-4d27-8ef9-8d76e568c29d": components["schemas"]["b7833b52-c378-4722-917c-e2ad3b0e8c0f"];
        "651ba3c6-e90f-40c2-985f-f711b695323b": components["schemas"]["e96b9818-a0e3-42f2-aaa5-99ff0d39e705"][];
        "d83f2462-3ba9-4422-ad6a-04e03cbae47a": {
            /** @description (typeName=java.util.List<com.tccc.kos.core.primary.service.update.UpdateInfo$Note>) */
            notes?: components["schemas"]["033f1be1-1fcb-4824-a625-a8b78f450bb4"];
            blocked?: boolean;
            /** Format: int64 */
            createTime?: number;
            active?: boolean;
            manifestId?: string;
            deviceId?: string;
        };
        "cfa26b8c-9720-4151-b2c4-f143ffbb1a45": {
            /** @description (typeName=com.tccc.kos.core.service.browser.BrowserId) */
            browserId?: components["schemas"]["ee6b8630-3f96-4542-b268-a4e294348ef7"];
            type?: string;
            /** @description (typeName=java.util.Map<java.lang.String, java.lang.Object>) */
            properties?: components["schemas"]["583a4e62-93f6-4018-8b06-b0e29290d3c6"];
        };
        "2d651856-fa35-4a12-b059-63b742955c50": components["schemas"]["cda5f674-ce86-4e53-a2b5-5b392637bd17"][];
        "9574ad7b-cd4b-4692-b71e-4ee2dd2620b6": {
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            childrenIds?: components["schemas"]["34de036b-4702-460d-9db0-1ee36f7c3ed7"];
            /** @description (typeName=java.util.Collection<java.lang.String>) */
            parentIds?: components["schemas"]["34de036b-4702-460d-9db0-1ee36f7c3ed7"];
            altId?: string;
        };
        "03665f19-c669-4b3c-9130-58650869adaf": unknown;
        "264f0908-eb0e-4bd8-88f1-b50082ea62f1": {
            integralNumber?: boolean;
            double?: boolean;
            valueNode?: boolean;
            floatingPointNumber?: boolean;
            bigInteger?: boolean;
            float?: boolean;
            /** @description (typeName=com.fasterxml.jackson.databind.node.JsonNodeType) */
            nodeType?: components["schemas"]["e4787f35-6aa2-4758-8eba-6778a70d3997"];
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
        "f4bfd515-3ee7-4d43-888a-352cf4beff64": components["schemas"]["517d8784-f157-4c5d-bace-05afe5c80b01"][];
        "02996c61-7618-4aed-ae66-3a3b50300414": components["schemas"]["d83f2462-3ba9-4422-ad6a-04e03cbae47a"][];
        "f16d17f3-9a42-461e-a48b-4413ea077905": components["schemas"]["e3c8b6e3-8a94-4379-9cfa-855bcd662b1e"][];
        "04cf5054-d837-4dc5-9e87-cb387ef6b69c": unknown;
        "8fee6637-b2ec-473d-8ec7-8f43fc6e9996": {
            incomplete?: boolean;
            /** @description (typeName=java.util.List<com.tccc.kos.core.manifest.ResolvedDeviceManifest$ManifestInfo>) */
            manifestInfoChain?: components["schemas"]["aa99236c-3d65-44b2-8fd5-fff395ec76ec"];
            /** @description (typeName=com.tccc.kos.commons.manifest.DeviceManifest) */
            deviceManifest?: components["schemas"]["4e9cf507-8ec7-4e09-9a93-fb6148f6c359"];
            manifestId?: string;
        };
        "fc792eaf-3d93-47de-955c-dc033793e736": components["schemas"]["561a7756-3302-4f29-a34c-5db4b181a08c"][];
        /** @description (typeName=com.tccc.kos.ext.cms.service.screen.ScreenContext) */
        "df5e5aa9-8284-455f-92b2-2b44eb2147e0": components["schemas"]["eedb6583-4428-40dd-8f24-0f906f6d554b"];
        /** Format: int64 */
        "ccee6952-72cf-4ac8-a5c5-1c2ac8ac602e": number;
        "59845527-049b-48ad-9277-d5720b043154": {
            ex?: string;
            /** Format: date-time */
            time?: string;
            type?: string;
            /** Format: int32 */
            idx?: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
