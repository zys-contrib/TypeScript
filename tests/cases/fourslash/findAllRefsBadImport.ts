/// <reference path='fourslash.ts'/>

////[|import { [|{| "declarationRangeIndex": 0 |}ab|] as [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 0 |}cd|] } from "doesNotExist";|]

const [r0Def, r0, r1]  = test.ranges();
verify.referenceGroups(r0, undefined);
verify.singleReferenceGroup("import cd", [r1]);
