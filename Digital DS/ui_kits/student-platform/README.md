# Luminova Student Platform — UI Kit

Recreation da plataforma do aluno. **Como o cliente não forneceu codebase ou Figma, esta é uma interpretação fiel das diretrizes** aplicada a uma plataforma escolar típica K-12 (login → dashboard → aula).

Surface: produto interno autenticado. Audiência: alunos (e secundariamente professores).

## Click-thru flow

1. **Login** com switcher de segmento para colorir o acento
2. **Dashboard** com agenda do dia, atividades pendentes, mural de comunicados
3. **Aula** com vídeo player placeholder, materiais e tarefas

A cor de acento na navegação muda conforme o segmento do aluno logado — F1 turquesa, F2 laranja, Médio roxo, Profs navy.

## Files

- `index.html` — orquestra Login → Dashboard → LessonView
- `Login.jsx` — tela de entrada com switcher de segmento
- `Sidebar.jsx` — nav lateral colorida pelo segmento
- `TopBar.jsx` — barra superior com busca, sino, avatar
- `Dashboard.jsx` — home autenticada
- `LessonView.jsx` — visualização de aula
- `ActivityCard.jsx` — card de atividade reutilizável

## Components

Sidebar com acento por segmento · TopBar · Cards de atividade · Lista de comunicados · Player placeholder · Botões e badges do sistema.
