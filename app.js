var argv = require('yargs').argv;
var request = require('request');

if (argv._.length !== 4) {
  usage();
}

return request({
  url: 'https://api.github.com/repos/' + argv._[2] + '/' + argv._[3] + '/issues',
  auth: {
    user: argv._[0],
    pass: argv._[1],
  },
  headers: {
      'User-Agent': 'github-issue-titles'
  }
}, function(err, response, body) {
  if (err) {
    console.error(err);
    usage();
  }
  var issues = JSON.parse(body);
  issues.forEach(function(issue) {
    console.log(issue.title);
  });
});

function usage() {
  console.error('Usage: github-issue-titles username password owner reponame\n');
  console.error('Note that "owner" is the owner of the repo, not necessarily');
  console.error('the same as "user"');
  process.exit(1);
}
