# bootstrap-website

Have a great website environment already ready to deploy.

Demo: https://damien-bry.com

## Installation

1. git clone this.
2. Edit all the .mustache/.json in ./src/html and edit the styles in ./src/scss
3. test it: `yarn start`
4. deploy it `yarn deploy`

## The Stack

Here are the tools used in this project:

- webpack: compile files and serve them in a development server
- mustache: minimalistic templating engine for your landing pages
- sass: CSS pre-processor
- firebase: hosting provided by google cloud platform, free to use until you reach a certain traffic
- skeleton: responsive CSS grid system
