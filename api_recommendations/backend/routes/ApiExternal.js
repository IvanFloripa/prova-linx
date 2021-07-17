module.exports = {
    getLinkExternal:function(routeParam){
        const linkExternalApi = 'http://wishlist.neemu.com/onsite/impulse-core/ranking/' 
        + routeParam +'.json';
        return linkExternalApi;
    }
};