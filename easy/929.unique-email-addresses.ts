// https://leetcode.com/problems/unique-email-addresses/solutions/6720394/9-lines/

const numUniqueEmails = (emails: string[]) =>
    emails.reduce((set, email) => {
        let actual = '', p = 0;
        for (const out = '@+'; !out.includes(email[p]); p++) {
            if (email[p] !== '.') actual += email[p];
        }
        while (email[p] !== '@') p++;
        return set.add(`${actual}${email.substring(p)}`);
    }, new Set<string>()).size;
