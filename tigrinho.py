import random
capital = int(input('Coloque um valor na caixinha: '))
aposta = int(input('qual valor da aposta?? '))
while True:

    if capital < aposta:
        print("Fim do jogo.")
        break

    x = random.randint(0, 10)

    # Atenção: Se digitar letra aqui, o programa vai travar.
    y = int(input('Digite um número (0 a 10): '))

    if y == x:
        print('TIGRINHO SOLTOU CARTINHA!! Você ganhou!')
        capital += aposta
    else:
        print('❌ Você errou!!')
        capital -= aposta

    # Feedback após a rodada
    print(f'Dinheiro restante: {capital}')
    print(f'O número certo era: {x}')
    resposta = str(input('deseja continuar?? '))
    if resposta == 'n' or resposta == 'N':
        print('vc ficou com ', capital, 'reais ')
        break


