export default interface SQLQueryBuilder {
    select(table: string, columns: string[]): SQLQueryBuilder;
    where(column: string, operator: string, value: any): SQLQueryBuilder;
    limit(start: number, offset: number): SQLQueryBuilder;
    build(): string;
}