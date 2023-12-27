interface Base64ImageWriter {
    write(
        encode: string,
        filename?: string,
        extension?: string
    ): Promise<string>;
}

export default Base64ImageWriter;
