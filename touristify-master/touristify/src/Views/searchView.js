function SearchView(props){
    return (      
        <div>
            <input id = "txtinput" placeholder = "Search places..." /> 
            <button id = "searchbtn" onClick={(e)=> {props.onText(document.getElementById("txtinput").value); {props.onSearch(e)}}} > 
            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNNzIuMjQsMTAuMzJjLTMyLjMzMDYyLDAgLTU4LjQ4LDI2LjE0OTM4IC01OC40OCw1OC40OGMwLDMyLjMzMDYzIDI2LjE0OTM4LDU4LjQ4IDU4LjQ4LDU4LjQ4YzExLjU0MjgxLDAgMjIuMjI1NjMsLTMuMzg2MjUgMzEuMjgyNSwtOS4xMzc1bDQyLjI0NzUsNDIuMjQ3NWwxNC42MiwtMTQuNjJsLTQxLjcxLC00MS42MDI1YzcuNDk4MTMsLTkuODM2MjUgMTIuMDQsLTIyLjAyNDA2IDEyLjA0LC0zNS4zNjc1YzAsLTMyLjMzMDYyIC0yNi4xNDkzNywtNTguNDggLTU4LjQ4LC01OC40OHpNNzIuMjQsMjQuMDhjMjQuNzY1MzEsMCA0NC43MiwxOS45NTQ2OSA0NC43Miw0NC43MmMwLDI0Ljc2NTMxIC0xOS45NTQ2OSw0NC43MiAtNDQuNzIsNDQuNzJjLTI0Ljc2NTMxLDAgLTQ0LjcyLC0xOS45NTQ2OSAtNDQuNzIsLTQ0LjcyYzAsLTI0Ljc2NTMxIDE5Ljk1NDY5LC00NC43MiA0NC43MiwtNDQuNzJ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
            </button>
        </div>
    );
} 

export default SearchView