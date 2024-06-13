function slugify(title) {
    let lowerCaseTitle = title.toLowerCase();
    let slug = lowerCaseTitle.replace(/\s+/g, '-');
    return slug;
}