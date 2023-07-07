fetch(url, {headers: {'Authorization': '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'}})


function getUserInfo(userName) {
	let url = 'https://api.github.com/users/${userName}/events/public'
	return {headers: {'Authorization': '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'}}
}).then




function wait(milSeconds){
	return new Promise( (resolve) => {
		setTimeout(()=>{
			resolve()
		})
	})
}