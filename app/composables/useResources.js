import { textChangeRangeIsUnchanged } from "typescript"


const useResources = () => {
    const resourceList = [
        {
            title: 'thing', 
            time: 60_000, // 1 minute
            description: [
                'alkjf;akldjf;alkjfa;lskjdfa;lkdjfa;lkdjf It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            ],
            
        }
    ]

    return { resourceList } 
}

export default useResources