module.exports = () => {
    /**
     * @event {ERRORS} 
     * @description Handling Errors
     */
    app.use((req, res, next) => {
        next(createError(404));
    })

    app.use((err, req, res, next) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get("env") === "development" ? err : {};

        res.status(err.status || 500);
        res.render("errors/error");
    })
}