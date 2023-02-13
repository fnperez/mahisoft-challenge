class LRUCache {
    constructor(size) {
        this.deque = []
        this.index = {}
        this.size = size
        this.findings = 0
        this.maxFindings = Number.MIN_SAFE_INTEGER
    }

    has(id) {
        return id in this.index
    }

    put(id) {
        if (this.has(id)) {
            this.found()
            
            return
        } 

        this.miss()

        if (this.deque.length == this.size) {
            const itemId = this.deque.shift()

            delete this.index[itemId]
        }

        this.deque.push(id)
        this.index[id] = true
    }

    assignFindings() {
        this.maxFindings = this.maxFindings < this.findings ? this.findings : this.maxFindings
    }

    found() {
        this.findings++       
        this.assignFindings()
    }

    miss() {
        this.assignFindings()
        this.findings = 0
    }
}


function solution(t, input_arr) {
    const cacheSlots = new LRUCache(t)

    input_arr.forEach((id) => {
        cacheSlots.put(id)
    })

    return cacheSlots.maxFindings
}

console.log(solution(5, [1, 2, 3, 2, 4, 2, 3, 3, 4, 2, 1, 2, 8, 9]))