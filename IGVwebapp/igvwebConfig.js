var igvwebConfig = {

    genomes: "resources/genomes.json",
    trackRegistryFile: "resources/tracks/trackRegistry.json",
    sessionRegistryFile: "resources/sessions/sessionRegistry.json",

    // Supply a drobpox api key to enable the Dropbox file picker in the load menus.  This is optional
    //dropboxAPIKey: "...",
    
     // Supply a Google client id to enable the Google file picker in the load menus.  This is optional
    //clientId: "...",
    // apiKey: "...",

    // Provide a URL shorterner function or object.   This is optional.  If not supplied
    // sharable URLs will not be shortened .
    urlShortener: {
        provider: "tinyURL"
    },

    enableCircularView: true,

    restoreLastGenome: true,

    igvConfig:
        {
            genome: "hg19",
            locus: "all",
            genomeList: "resources/genomes.json",
            queryParametersSupported: true,
            showChromosomeWidget: true,
            showSVGButton: false,
            tracks: [
           {
               name: "IB10",
               type: "wig",
               format: "bigwig",
               url: "data/IB10.bw",
           },
           {
               name: "IB11",
               type: "wig",
               format: "bigwig",
               url: "data/IB11.bw",
           },
           {
               name: "IB12",
               type: "wig",
               format: "bigwig",
               url: "data/IB12.bw",
           }
           // Other tracks...
       ]
        }

}
