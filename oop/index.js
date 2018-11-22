function StopWatch(){
    let startTime = 0;
    let stopTime = 0;
    let started = false;
    let stopped = true;
    this.duration = 0;

    this.start = function(){
        if(started)
            throw new Error('StopWatch is already started');
        startTime = new Date()-0;
        started = true;
        stopped = false;
    }

    this.stop = function(){
        if (stopped)
            throw new Error('StopWatch is already stopped!');
        stopTime = new Date()-0;
        started = false;
        stopped = true;
    }

    this.reset = function(){
        startTime = 0;
        stopTime = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            if (stopped)
                return (stopTime - startTime)/1000;
            else
                throw new Error('StopWatch IS NOT stopped');
        }
    });
}
