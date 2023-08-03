import { sanitize } from "isomorphic-dompurify";
import { marked } from "marked";

export function parseMarkdown(data: string | undefined | null) {
    if (data && data !== "") {
        return sanitize(
            marked.parse(data, { mangle: false, headerIds: false })
        );
    }
    return ""
}
