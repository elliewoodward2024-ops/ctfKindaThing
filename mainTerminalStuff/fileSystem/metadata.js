
// export const metadata = {
//     size: Number,
//     type: String,
//     permissions: Number,
//     owner: String,
//     group: String,
//     created: Date, 
//     modified: Date
// };

export function makingMetadataCusWeCoolLikeThat(content, type){
    
    const now = new Date();
    const modified = now;
    const created = now;
    const owner= "visitor";
    const group = "visitor";

    if (type === "file"){
        const fileType = "text/plain"
        const size = new TextEncoder().encode(content).length;
        const permissions = "644";
        return {
            size,
            fileType,
            permissions,
            owner,
            group,
            created,
            modified
        };

    } else if (type === "directory"){
        const permissions = "755";
        const fileType = "directory"
        const size = 0;
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



//My mod/thing of the coloured indenting is so freaking useful in this - great find   
}