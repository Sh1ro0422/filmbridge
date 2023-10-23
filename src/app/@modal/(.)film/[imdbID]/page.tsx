import { Drawer, SingleMovie, omdbApiCall } from "@/components"

async function getData(imdbID:string) {
    let damjuulakhUtga = undefined
    await omdbApiCall(imdbID).then(result => {
        damjuulakhUtga = result
    })
    return damjuulakhUtga
}

export default async function MovieModal(props:any) {
    const { params } = props
    const damjuulakhUtga:any = await getData(params['imdbID'])
    return (
        <Drawer title={damjuulakhUtga?.Title} isOpen={true}>
            <SingleMovie kinoId={params.imdbID} ugugdul={damjuulakhUtga}/>
        </Drawer>
    )
}