Java.perform(() => {
    const interval = setInterval(() => {
        const ExamInfoParser = Java.use(
            "com.ciwong.epaper.modules.epaper.a.b$4"
        );
        const WorkContents = Java.use(
            "com.ciwong.epaper.modules.me.bean.WorkContents"
        );
        clearInterval(interval);

        ExamInfoParser.success.implementation = function (info: string) {
            if (
                this.b.value.getTypeName() ===
                "com.ciwong.epaper.modules.epaper.bean.ListenspeakExam"
            ) {
                const process = (o: any) => {
                    const object = JSON.parse(JSON.stringify(o));
                    if (object.children.length === 0) {
                        let answers = "\n\n\n";
                        object.options.forEach((option: any) => {
                            if (option.isAnswer === 1) {
                                option.value.forEach((value: any) => {
                                    answers += value.body;
                                    answers += "\n";
                                });
                            }
                            answers += "\n";
                        });
                        object.trunk.body += answers;
                        return object;
                    } else {
                        return Object.assign(object, {
                            children: object.children.map((child: any) =>
                                process(child)
                            ),
                        });
                    }
                };

                const ciwong = (str: string) => {
                    const object = JSON.parse(str);
                    return Object.assign(object, {
                        items: object.items.map((item: any) =>
                            Object.assign(item, {
                                questions: item.questions.map((question: any) =>
                                    process(question)
                                ),
                            })
                        ),
                    });
                };

                return ExamInfoParser.success.call(
                    this,
                    JSON.stringify(ciwong(info))
                );
            }
            return ExamInfoParser.success.call(this, info);
        };

        WorkContents.getExamMode.implementation = function () {
            return 0;
        };
    }, 200);
});
