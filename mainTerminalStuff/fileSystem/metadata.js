
// export const metadata = {
//     size: Number,
//     type: String,
//     permissions: Number,
//     owner: String,
//     group: String,
//     created: Date, 
//     modified: Date
    
// };

export function makingMetadataCusWeCoolLikeThat(content = ""){
    const size = new TextEncoder().encode(content).length;;
    const now = new Date();
    const modified = now;
    const created = now;
    const permissions = "644";
    const owner= "visitor";
    const group = "visitor";
    const fileType = "text/plain"


    return {
        size,
        fileType,
        permissions,
        owner,
        group,
        created,
        modified
    };
    
}