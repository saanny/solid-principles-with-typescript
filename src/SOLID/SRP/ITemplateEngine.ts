export default interface ITemplateEngine {
    render(template: string, params: any): string;
}
