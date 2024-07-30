# Documentação do Sistema - Solidarize
# Minimundo
O sistema Solidarie será uma plataforma dedicada a fornecer informações detalhadas sobre diversas instituições que oferecem serviços não governamentais no estado do Espírito Santo, com o objetivo de facilitar uma busca eficiente aos interessados. O sistema organizará as informações em algumas divisões principais.
Entre essas divisões, os Usuários terão os seguintes dados: nome, id, descrição e senha. Os usuários poderão ser Instituição ou Voluntário, onde cada Instituição terá CNPJ e localização, e cada voluntário terá um username. Ambos os usuários possuem acesso um ao outro, em que cada tipo de usuário tem um tipo de acesso e um id.
O usuário possui um ou vários contatos, onde cada contato possui dados e id, e o contato é possuído por um único usuário. Cada contato pertence a um, e somente um, tipo de contato, que possui id e tipo, e o tipo de contato pode estar associado a nenhum ou vários contatos.
O usuário escolhe uma ou várias categorias de seu interesse, onde esta possui um id e uma descrição, e a categoria poderá ser escolhida por nenhum ou vários usuários. Tal categoria, se relaciona a nenhuma ou várias atividades, que possuem id, data, localização, descrição e título, podendo elas serem um evento (que tem um períoo) ou um voluntariado (que tem uma carga horária) e se relacionarem a uma ou várias categorias.
A instituição administra nenhuma ou várias atividades, que podem ser administradas por uma ou várias instituições. A instituição pode estar associada a um ou vários comentários, que possuem id, instituição, data, descrição e título, e um comentário pode estar associado a uma ou várias instituições. O Voluntário participa de nenhuma ou várias atividades, que podem ser participadas por nenhum ou vários voluntários. O voluntário pode estar associado a nenhum ou vários comentários, e um comentário será associado a um ou vários voluntários.
# Histórias de Usuário
- Como usuário, gostaria de me cadastrar na plataforma.
- Como usuário, gostaria de realizar login na plataforma.
- Como usuário, gostaria de realizar o CRUD de minhas informações.
- Como usuário, gostaria de realizar comentários.
- Como usuário, gostaria de vincular minhas redes sociais ao meu perfil.
- Como voluntário, gostaria de ser colaborador de uma instituição.
- Como voluntário, gostaria de pesquisar/visualizar por voluntariados.
- Como voluntário, gostaria de pesquisar/visualizar por instituições.
- Como voluntário, gostaria de pesquisar/visualizar por eventos.
- Como instituição, gostaria de realizar o CRUD de voluntariados.
- Como instituição, gostaria de realizar o CRUD de eventos.
- Como instituição, gostaria de realizar o CRUD dos colaboradores. 
# Casos de Uso
![image](https://github.com/user-attachments/assets/964821cd-dc7f-41e0-b907-83162d8e7334)
# Diagramas de Atividades
![image](https://github.com/user-attachments/assets/7c6e9d2d-ba60-4615-b4fa-fa9a85207038)
# Modelo de Dados
## Modelo Conceitual
![image](https://github.com/user-attachments/assets/07b1af54-b303-49b7-b190-aa27c3bbc7ab)
## Modelo Lógico
![image](https://github.com/user-attachments/assets/c0828f85-8889-4f7b-ab55-56a03b054345)
# Prototipação de Telas
[Link do Protótipo](https://app.appsmith.com/app/projeto-solidarize/login-667b04a8aadff8332282933e)
# Implementação
[Link do WebSite](https://ui-ongs.github.io/UI-PwbAval/)
## Prints das telas principais
## Tela de Cadastro/Login
![image](https://github.com/user-attachments/assets/7eff092b-2897-401c-bc9f-3454ad98785f)
## Tela Home
![image](https://github.com/user-attachments/assets/64438a4a-41d6-4988-84ee-8530860702f3)
## Tela de Perfil
![image](https://github.com/user-attachments/assets/de33badd-56b5-4609-a0fe-a4e5138f5b36)
## Tela de Eventos
![image](https://github.com/user-attachments/assets/53437ad0-99eb-40fb-b932-da3290e36fa9)
## Tela de Voluntariados
![image](https://github.com/user-attachments/assets/fda0461e-17a9-4078-9ddf-83837120516f)
## Tela GeoMap
![image](https://github.com/user-attachments/assets/864eb96d-6063-4cb9-a8de-0cf329e87bdf)
## Tela Sobre Nós
![image](https://github.com/user-attachments/assets/4f64e07e-fbe4-40cd-a8fd-3b504268411e)





 


