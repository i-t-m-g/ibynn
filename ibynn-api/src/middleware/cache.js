export const cache = (client) => {
    return async function (req, res, next) {
        const q = req.query.q;
        const page = req.query.page
    
        try {
            const data = await client.get(q);
            
            if (data) res.send(JSON.parse(data));
            else next();
            

        
        } 
        catch (error) {
            console.log(error);
        }
    
    
    };

}