fetch("site/progress.json")
    .then(response => {

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {

        console.log("progress.json carregado:", data);

        // =========================
        // ESTADO ATUAL
        // =========================

        const currentState = data.current_state;

        document.getElementById("phase-name").textContent =
            currentState.phase_name;

        document.getElementById("current-focus").textContent =
            currentState.current_focus;

        document.getElementById("progress-value").textContent =
            currentState.phase_progress + "%";

        document.getElementById("progress-fill").style.width =
            currentState.phase_progress + "%";


        // =========================
        // DADOS DOS TÓPICOS
        // =========================

        const topics = data.progress_by_topic;

        createKnowledgeGraph(topics);

    })
    .catch(error => {

        console.error("Erro ao carregar progress.json:", error);

    });


// ==================================================
// CRIA O MAPA DO CONHECIMENTO
// ==================================================

function createKnowledgeGraph(topics) {

    const svg = document.getElementById("knowledge-graph");

    const topicNames = Object.keys(topics);

    const centerX = 450;
    const centerY = 300;

    const radius = 210;


    // =========================
    // NÓ CENTRAL
    // =========================

    const centerNode = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );

    centerNode.setAttribute("cx", centerX);
    centerNode.setAttribute("cy", centerY);
    centerNode.setAttribute("r", 14);

    centerNode.style.fill = "white";

    svg.appendChild(centerNode);


    // =========================
    // CRIA OS TÓPICOS
    // =========================

    topicNames.forEach((topicName, index) => {

        const topic = topics[topicName];

        const angle =
            (index / topicNames.length) * Math.PI * 2;

        const x =
            centerX + Math.cos(angle) * radius;

        const y =
            centerY + Math.sin(angle) * radius;


        // -------------------------
        // LINHA
        // -------------------------

        const line = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );

        line.setAttribute("x1", centerX);
        line.setAttribute("y1", centerY);

        line.setAttribute("x2", x);
        line.setAttribute("y2", y);

        line.classList.add("graph-line");

        svg.appendChild(line);


        // -------------------------
        // GRUPO DO NÓ
        // -------------------------

        const group = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
        );

        group.classList.add("graph-node");


        // -------------------------
        // CÍRCULO
        // -------------------------

        const circle = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );

        /*
            Quanto maior o progresso,
            maior será o ponto.
        */

        const size =
            3 + (topic.progress / 100) * 7;

        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", size);


        // -------------------------
        // TEXTO
        // -------------------------

        const text = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );

        text.setAttribute("x", x + 12);
        text.setAttribute("y", y + 4);

        text.textContent = topicName;


        // -------------------------
        // INFORMAÇÃO AO PASSAR O MOUSE
        // -------------------------

        group.addEventListener("mouseenter", () => {

            console.log(
                topicName,
                "-",
                topic.progress + "%",
                "-",
                topic.status
            );

        });


        group.appendChild(circle);
        group.appendChild(text);

        svg.appendChild(group);

    });

}
