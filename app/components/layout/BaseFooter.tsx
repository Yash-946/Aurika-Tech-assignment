"use client";

import { useTranslationContext } from "@/contexts/TranslationContext";

const BaseFooter = () => {
    const { _t } = useTranslationContext();

    return (
        <footer className="container py-10">
            <p>
                {_t("footer.developedBy")}{" "}
                <a
                    href="https://www.yashagrawal.top/"
                    target="_blank"
                    style={{ textDecoration: "underline" }}
                >
                    Yash Agrawal
                </a>
            </p>
        </footer>
    );
};

export default BaseFooter;
