import { Project, ts } from 'ts-morph';
import apiText from 'raw-loader!@casual-simulation/aux-common/Formulas/formula-lib.d.ts';

const project = new Project({});
const source = project.createSourceFile('api.d.ts', apiText);

const interfaces = source.getInterfaces();

let text = '';

for (let i of interfaces) {

    for (let comment of i.getLeadingCommentRanges()) {
        text += comment.getText();
        text += '\n';
    }

    text += i.getText(source);
    text += '\n';
}

export {
    text
};