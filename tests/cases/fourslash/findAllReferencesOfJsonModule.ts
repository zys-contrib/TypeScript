﻿/// <reference path='fourslash.ts' />

// @resolveJsonModule: true
// @module: commonjs
// @esModuleInterop: true

// @Filename: /foo.ts
////[|import [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 0 |}settings|] from "./settings.json";|]
////[|settings|];

// @Filename: /settings.json
//// {}

verify.singleReferenceGroup("import settings", "settings");
