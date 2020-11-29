package io.fgmachado.pocreactive.resource;

import io.fgmachado.pocreactive.entity.Customer;
import io.fgmachado.pocreactive.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/customers")
public class CustomerResource {

    private final CustomerRepository repository;

    @CrossOrigin(origins = {"http://localhost:4200", "http://localhost:9000"})
    @GetMapping("/{tenant}")
    public Flux<Customer> getAllByTenant(@PathVariable("tenant") String tenant) {
        return repository.findAllByTenant(tenant);
    }

}
