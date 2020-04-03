
let instance = null;

class TemplateService {

    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    post = data => {

        data.id = this.getRandomIntInclusive();
        let existingTemplates = this.get();
        existingTemplates.push(data);

        return localStorage.setItem('templates', JSON.stringify(existingTemplates));
    }

    put = data => {
        let existingTemplate = this.get(data.id);

        return localStorage.setItem('templates', JSON.stringify(existingTemplate));
    }

    get = (id = null) => {

        let templates = JSON.parse(localStorage.getItem('templates')) || [];
        if (!id)
            return templates;

        return templates.filter(template => template.id == id)[0];
    }

    getRandomIntInclusive = () => Math.floor(Math.random() * (999 - 1 + 1)) + 1;
}

export default new TemplateService();
