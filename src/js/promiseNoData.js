function PromiseNoData(promise, data, error) {

    if (error) {

        return <div> some error </div>;
    }
    if (!promise) {

        return <div>no data</div>
    }
    if (!error && !data) {

    return <div><img src= "http://www.csc.kth.se/~cristi/loading.gif" ></img></div>
    }
    else {
        return false
   }
}